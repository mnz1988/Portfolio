import { useEffect } from 'react'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

export default function Fan(props) {
    const { nodes, animations } = useGLTF('./models/fan.glb')
    const fanNodes = nodes
    const { ref, actions } = useAnimations(animations)
    useEffect(() => void (actions.fanAction.reset().play().paused = false), [])
    // useFrame(() => (actions.fanAction.time = actions.fanAction.getClip().duration))
    const bakedTexture = useTexture('/backed_texture.webp')
    bakedTexture.flipY = false
    return (
        <group {...props} ref={ref}>
            <primitive object={fanNodes.fan} />
            {/* @ts-ignore */}
            <mesh geometry={fanNodes.fan.geometry} position={[-15.235, 15.807, -16.066]} rotation={[Math.PI / 2, 0, 0]}><meshBasicMaterial map={bakedTexture} /></mesh>
        </group>
    )
}

/* @ts-ignore */
useGLTF.preload('./models/fan.glb')
