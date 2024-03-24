/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Float, GizmoHelper, GizmoViewport, Grid, Text, } from '@react-three/drei'
import { BufferGeometry } from 'three'

export default function Workshop(props) {
    const { nodes } = useGLTF('/workshop.glb')
    const bakedTexture = useTexture('/backed_texture.webp')
    bakedTexture.flipY = false

    const meshRef = useRef(null)
    useFrame((state, delta) => (meshRef.current.rotation.y += delta - 0.03))
    //@ts-ignore
    const workStationTable = nodes["single-table"].geometry
    //@ts-ignore
    const workStationChair1 = nodes["single-chair-1"].geometry
    //@ts-ignore
    const workStationChair2 = nodes["single-chair-2"].geometry
    //@ts-ignore
    const windowsGmy = nodes.win.geometry
    //@ts-ignore
    const shelves = nodes.shelf.geometry
    //@ts-ignore
    const projector = nodes["hanging-light-body"].geometry
    //@ts-ignore
    const miniRobotF = nodes.miniRobo3.geometry
    //@ts-ignore
    const miniRobot = nodes.miniRobo7.geometry
    return (
        // @ts - ignore
        <group {...props} dispose={null} scale={0.1} position={[0.1, -0.7, 0]}>

            <Text fontSize={0.6} fontWeight={800} color="Purple" position={[-20.415, 4.462, 12.95]} rotation={[0, Math.PI / 2, 0]}>About Me</Text>
            <Text fontSize={0.8} fontWeight={900} color="Purple" position={[-20.415, 3.75, 11.35]} rotation={[0, Math.PI / 2, 0]}>⤦</Text>
            {/* <Text fontSize={0.7} fontWeight={400} color="pink" position={[-20.415, 1.9, 12.55]} rotation={[0, Math.PI / 2, -Math.PI / 2]}>↧ About</Text> */}
            <Text fontSize={0.6} fontWeight={800} color="Purple" position={[16.821, 14.2, -16.1]} rotation={[0, 0, 0]}>Portfolio</Text>
            <Text fontSize={0.8} fontWeight={800} color="Purple" position={[18.4, 13.63, -16.1]} rotation={[0, 0, 0]}>⤦</Text>
            {/* <Text fontSize={0.6} fontWeight={500} color="pink" position={[16.921, 11.8, -15.6]} rotation={[Math.PI, Math.PI, -Math.PI / 2]}>↥ Portfolio</Text> */}

            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', '#3b5b9d']} labelColor="white" />
            </GizmoHelper>

            <Grid cellSize={0.5} cellThickness={1} cellColor={0x656565} sectionSize={5} sectionThickness={1} sectionColor={0x72497c} infiniteGrid={true} />
            {/* @ts-ignore */}
            <group name="workstation">

                <mesh geometry={workStationTable} position={[-14.184, 1.027, -9.323]}> <meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationTable} position={[-5.676, 1.027, -9.323]}> <meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationTable} position={[3.206, 1.027, -9.323]}> <meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationTable} position={[12.886, 1.027, -9.323]}> <meshBasicMaterial map={bakedTexture} /></mesh>

                <mesh geometry={workStationChair1} position={[-13.386, 0.669, -8.301]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair1} position={[-4.878, 0.669, -8.301]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair1} position={[4.004, 0.669, -8.301]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair1} position={[13.684, 0.669, -8.301]}><meshBasicMaterial map={bakedTexture} /></mesh>

                <mesh geometry={workStationChair2} position={[-15.039, 0.669, -10.623]} rotation={[Math.PI, 0, Math.PI]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair2} position={[-6.532, 0.669, -10.623]} rotation={[Math.PI, 0, Math.PI]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair2} position={[2.35, 0.669, -10.623]} rotation={[Math.PI, 0, Math.PI]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={workStationChair2} position={[12.03, 0.669, -10.623]} rotation={[Math.PI, 0, Math.PI]}><meshBasicMaterial map={bakedTexture} /></mesh>

            </group>
            {/* @ts-ignore */}
            <group name="Window">

                <mesh geometry={windowsGmy} position={[-5.775, 16.058, -16.145]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 14.363, -16.138]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 12.067, -16.138]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 10.291, -16.138]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 15.175, -18.828]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 13.401, -18.854]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 11.127, -18.854]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[-5.774, 9.415, -18.842]} rotation={[-Math.PI / 2, 0, -Math.PI]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[21.923, 16.058, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[21.923, 14.402, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[24.59, 15.376, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[24.59, 13.682, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[30.184, 16.246, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[30.184, 14.537, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[32.917, 15.366, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[32.917, 13.669, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[38.459, 16.298, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[38.459, 14.563, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[41.165, 15.379, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>
                <mesh geometry={windowsGmy} position={[41.165, 13.656, -1.375]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}> <meshBasicMaterial map={bakedTexture} /> </mesh>

            </group>
            {/* @ts-ignore */}
            <group name="toolbox">
                {/* @ts-ignore */}
                <mesh geometry={nodes.b2001.geometry} position={[-20.194, 2.297, -7.567]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh geometry={nodes.b2002.geometry} position={[-20.194, 2.297, -5.74]}><meshBasicMaterial map={bakedTexture} /></mesh>
            </group>
            {/* @ts-ignore */}
            <group name="Shelves">

                <mesh geometry={shelves} position={[-17.843, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box1" geometry={nodes.b1.geometry} scale={0.4} position={[-16.843, 2.801, -15.786]} > <meshBasicMaterial /></mesh>
                <mesh geometry={shelves} position={[-11.165, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh geometry={nodes.b2002.geometry} scale={0.3} position={[-10.165, 2.901, -15.786]} rotation={[0, -2, 0]}><meshBasicMaterial /></mesh>
                <mesh geometry={shelves} position={[-4.794, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={shelves} position={[1.078, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={shelves} position={[12.86, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh geometry={nodes.b2002.geometry} scale={0.3} position={[8.165, 2.901, -15.786]}><meshBasicMaterial /></mesh>
                <mesh geometry={shelves} position={[7.027, 2.801, -15.786]} rotation={[-2.588, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box1" geometry={nodes.b1.geometry} scale={0.4, 0.1, 0.3} position={[14.543, 2.801, -15.786]} > <meshBasicMaterial /></mesh>

            </group>
            {/* @ts-ignore */}
            <group name="projectors">

                <mesh geometry={projector} position={[-16.191, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-11.728, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-7.266, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-2.803, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[1.659, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[6.122, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[10.585, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[15.047, 18.336, -9.911]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-16.191, 18.336, -0.914]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-11.728, 18.336, -0.914]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-7.266, 18.336, -0.914]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-2.803, 18.336, -0.914]}> <meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[1.659, 18.336, -0.914]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[6.122, 18.336, -0.914]} > <meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[10.585, 18.336, -0.914]} ><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[15.047, 18.336, -0.914]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-16.191, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-11.728, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-7.266, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[-2.803, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[1.659, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[6.122, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[10.585, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>
                <mesh geometry={projector} position={[15.047, 18.336, 8.217]}><meshBasicMaterial map={bakedTexture} /></mesh>

            </group>
            {/* @ts-ignore */}
            <group name="miniRobot-Float">

                <Float speed={6} floatIntensity={0.05} rotationIntensity={0.05}>
                    <mesh name="miniRobo5" geometry={miniRobotF} position={[7.072, 9.868, -1.763]} rotation={[-3.141, 0.883, -0.001]}>
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>

                <Float speed={6} floatIntensity={0.05} rotationIntensity={0.05}>
                    <mesh
                        name="miniRobo6"
                        geometry={miniRobotF}
                        position={[-4.555, 4.292, 9.479]} rotation={[-0.001, 1.033, -3.141]}
                    >
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>

                <Float speed={6} floatIntensity={0.05} rotationIntensity={0.05}>
                    <mesh
                        name="miniRobo7"
                        geometry={miniRobotF}
                        position={[-9.392, 10.257, -3.745]} rotation={[-3.141, -0.937, 0.001]}
                    >
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>

                <Float speed={6} floatIntensity={0.01} rotationIntensity={0.1}>
                    <mesh
                        name="miniRobo8"
                        geometry={miniRobotF}
                        position={[14.216, 1.826, 6.173]} rotation={[-3.138, 1.373, -0.003]}
                    >
                        <meshBasicMaterial map={bakedTexture} />
                    </mesh>
                </Float>

            </group>
            {/* @ts-ignore */}
            <group name="miniRobot-fixed">

                <mesh name="miniRobo1"
                    geometry={miniRobot} position={[-15.14, 0.684, -2.876]} rotation={[-2.99, -0.031, -0.008]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                <mesh name="miniRobo2"
                    geometry={miniRobot} position={[-13.623, 8.133, -0.04]} rotation={[-3.14, 1.12, -0.001]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                <mesh name="miniRobo3"
                    geometry={miniRobot} position={[-19.426, 0.684, 7.966]} rotation={[-1.072, -1.398, 2.064]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                <mesh name="miniRobo4"
                    geometry={miniRobot} position={[1.379, 2.1, 9.199]} rotation={[-0.912, -1.394, 2.222]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

            </group>

            <mesh name="legS"
                // @ts-ignore
                geometry={nodes.leg2.geometry} position={[-6.811, 0.167, 8.372]} rotation={[0.03, -0.79, -1.507]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            <mesh name="legB"
                // @ts-ignore
                geometry={nodes.leg1.geometry} position={[10.013, 1.59, 7.526]} rotation={[-1.548, -0.071, -2.986]}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            {/* @ts-ignore */}
            <group>

                <mesh name="fanB"
                    // @ts-ignore
                    geometry={nodes.fanB.geometry} position={[-15.235, 15.807, -16.066]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                <mesh name="fan" ref={meshRef}
                    // @ts-ignore
                    geometry={nodes.fan.geometry} position={[-15.235, 15.807, -16.066]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

            </group>
            {/* @ts-ignore */}
            <group>
                {/* @ts-ignore */}
                <mesh name="bigRobotBody" geometry={nodes.bigRobotBody.geometry} position={[0, 0.156, 0]}>
                    <meshMatcapMaterial map={bakedTexture} />
                </mesh>
                {/* @ts-ignore */}
                <mesh name="bigRobotarmL" geometry={nodes.bigRobotarmL.geometry} position={[12.831, 9.118, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

            </group>
            {/* @ts-ignore */}
            <group>
                {/* @ts-ignore */}
                <mesh name="floor" geometry={nodes.floor.geometry} position={[0, 0.075, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* Walls */}
                {/* @ts-ignore */}
                <mesh name="wall1" geometry={nodes.wall1.geometry} position={[0.009, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="wall2" geometry={nodes.wall2.geometry} position={[0.175, 0, 4.406]} rotation={[0, -1.571, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* Level 2 */}
                {/* @ts-ignore */}
                <mesh name="level2base" geometry={nodes.level2base.geometry} position={[0, 9.996, -14.306]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="level2guards" geometry={nodes.level2guards.geometry} position={[18.296, 11.962, -12.788]} rotation={[0, 0, -Math.PI / 2]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                {/* Boxes on the Floor */}
                {/* @ts-ignore */}
                <mesh name="box1" geometry={nodes.b1.geometry} position={[19.625, 1.168, -12.648]} > <meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box2" geometry={nodes.b2.geometry} position={[19.625, 3.038, -12.675]} ><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box3" geometry={nodes.b3.geometry} position={[19.625, 0.796, -10.464]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box4" geometry={nodes.b4.geometry} position={[19.625, 2.562, -10.511]}><meshBasicMaterial map={bakedTexture} /></mesh>
                {/* @ts-ignore */}
                <mesh name="box5" geometry={nodes.b5.geometry} position={[17.843, 0.739, -11.668]}><meshBasicMaterial map={bakedTexture} /></mesh>
            </group>
            {/* @ts-ignore */}
            <group >
                {/* @ts-ignore */}
                <mesh name="armR" geometry={nodes.armR.geometry} position={[-8.142, 9.081, -1.985]} rotation={[Math.PI, -0.474, 2.577]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                {/* @ts-ignore */}
                <mesh name="chain-1" geometry={nodes["chain-1"].geometry} position={[-14.293, 7.534, 1.218]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                {/* @ts-ignore */}
                <mesh name="chain-2" geometry={nodes["chain-2"].geometry} position={[-9.613, 9.067, -1.341]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
            {/* @ts-ignore */}
            <group>
                {/* @ts-ignore */}
                <mesh name="aircondition" geometry={nodes.aircondition.geometry} position={[-20.144, 7.402, 8.587]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>

                {/* @ts-ignore */}
                <mesh name="aircondition" geometry={nodes.aircondition.geometry} position={[16.288, 7.402, -15.766]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
            {/* @ts-ignore */}
            <group name='door-1' >
                {/* name="d1" geometry={nodes.d1.geometry} position={[-20.515, 1.162, 12.905]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} */}
                <mesh name="d2"
                    // @ts-ignore
                    geometry={nodes.d2.geometry} position={[-20.624, 0.158, 13.917]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                <mesh name="d3"
                    // @ts-ignore
                    geometry={nodes.d3.geometry} position={[-20.492, 1.683, 13.623]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
            {/* @ts-ignore */}
            <group name='door-2'>
                {/* name="d4" geometry={nodes.d1.geometry} position={[16.821, 11.013, -16.11]} rotation={[Math.PI / 2, 0, 0]} */}
                <mesh name="d6"
                    // @ts-ignore
                    geometry={nodes.d3.geometry} position={[16.102, 11.535, -16.088]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                <mesh name="d5"
                    // @ts-ignore
                    geometry={nodes.d2.geometry} position={[15.808, 10.009, -16.22]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>

        </group>
    )
}