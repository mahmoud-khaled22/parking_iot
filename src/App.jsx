import { useState, useEffect } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

import mqtt from 'mqtt'


import { initialState } from './data/mockData'
export default function App() {

  const [state, setState] =
    useState(initialState)

  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  const [loading, setLoading] =
    useState(true)

  const [client, setClient] =
    useState(null)

  useEffect(() => {

 
    const mqttClient =
      mqtt.connect(
        'wss://broker.hivemq.com:8884/mqtt'
      )

    setClient(mqttClient)

   
    mqttClient.on('connect', () => {

      

      setLoading(false)

      
      mqttClient.subscribe(
        'Thaer_Parking/data',
        (err) => {

          if (err) {

            console.log(
              'Subscribe Error:',
              err
            )

          } else {

            console.log(
              'Subscribed '
            )
          }
        }
      )
    })

    
    mqttClient.on(
      'message',
      (topic, payload) => {

        try {

          const msg =
            JSON.parse(
              payload.toString()
            )

          console.log(msg)

         
          if (
            msg.type ===
            'PARKING_STATUS'
          ) {

            setState(prev => ({

              ...prev,

              slots: [
                {
                  id: 'P1',
                  occupied: msg.slot1 === 1,
                  sensor: 'ACTIVE'
                },
                {
                  id: 'P2',
                  occupied: msg.slot2 === 1,
                  sensor: 'ACTIVE'
                },
                {
                  id: 'P3',
                  occupied: msg.slot3 === 1,
                  sensor: 'ACTIVE'
                },
                {
                  id: 'P4',
                  occupied: msg.slot4 === 1,
                  sensor: 'ACTIVE'
                }
              ],

              occupied:
                msg.occupied,

              available:
                msg.available,

              device: {

                ...prev.device,

                lastUpdate:
                  new Date()
                    .toLocaleTimeString()
              }

            }))
          }

          else if (
            msg.type ===
            'GATE_STATUS'
          ) {

            setState(prev => ({

              ...prev,

              gate: {

                ...prev.gate,

                status:
                  msg.state
              },

              device: {

                ...prev.device,

                lastUpdate:
                  new Date()
                    .toLocaleTimeString()
              }

            }))
          }

        
          else if (
            msg.type ===
            'LIGHTS_STATUS'
          ) {

            setState(prev => ({

              ...prev,

              lights: {

                state:
                  msg.state,

                ldr:
                  msg.ldr
              },

              device: {

                ...prev.device,

                lastUpdate:
                  new Date()
                    .toLocaleTimeString()
              }

            }))
          }

        } catch (e) {

          console.log(
            'JSON Error:',
            e
          )
        }
      }
    )

   
    mqttClient.on('error', (err) => {
    })

   
    return () => {

      mqttClient.end()
    }

  }, [])


  const handleGateControl =
    (action) => {

   
      setState(prev => ({

        ...prev,

        gate: {

          ...prev.gate,

          status:
            action === 'OPEN'
              ? 'OPEN'
              : 'CLOSED',
        },

        device: {

          ...prev.device,

          lastUpdate:
            new Date()
              .toLocaleTimeString(),
        }

      }))

      
      if (client) {

        client.publish(

          'Thaer_Parking/command',

          JSON.stringify({
            action
          })
        )

      }

    
      if (action === 'OPEN') {

        setTimeout(() => {

          setState(prev => ({

            ...prev,

            gate: {

              ...prev.gate,

              status: 'CLOSED',
            },

            device: {

              ...prev.device,

              lastUpdate:
                new Date()
                  .toLocaleTimeString(),
            }

          }))

        }, 3000)
      }
    }


  if (loading) {

    return (

      <div className="
        flex
        items-center
        justify-center
        min-h-screen
        bg-gray-100
      ">

        <div className="text-center">

          <div className="
            animate-spin
            rounded-full
            h-12
            w-12
            border-b-2
            border-blue-600
            mx-auto
            mb-4
          "></div>

          <p className="text-gray-600">

            Connecting to HiveMQ...

          </p>

        </div>

      </div>
    )
  }

  return (

    <div className="
      bg-gray-100
      font-sans
      text-gray-800
      min-h-screen
      flex
      flex-col
    ">

      <Header
        onMenuClick={() =>
          setSidebarOpen(
            !sidebarOpen
          )
        }
      />

      <div className="
        flex
        flex-1
        overflow-hidden
      ">

        <Sidebar
          open={sidebarOpen}
          onClose={() =>
            setSidebarOpen(false)
          }
        />

        <Dashboard
          state={state}
          onGateControl={
            handleGateControl
          }
        />

      </div>

    </div>
  )
}