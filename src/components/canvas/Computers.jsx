import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

const Computers = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <group position={[0, -2.85, -1.5]}>
        <primitive
          object={computer.scene}
          scale={0.85}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </group>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      className="computer-canvas"
      frameloop="always"
      shadows
      camera={{ position: [20, -0.25, 3.5], fov: 25 }}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={null}>
        <Computers />
        <OrbitControls
          makeDefault
          target={[0, -3.25, -1.5]}
          enableRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={0.7}
          maxPolarAngle={2.2}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  )

}

export default ComputersCanvas