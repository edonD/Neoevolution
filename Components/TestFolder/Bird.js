import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function Bird({ speed, factor, url, ...props }) {
  const { nodes, animations } = useGLTF(url);
  const { ref, mixer } = useAnimations(animations);

  useEffect(
    () => void mixer.clipAction(animations[0], ref.current).play(),
    [mixer, animations, ref]
  );

  useFrame((state, delta) => {
    ref.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });

  return (
    <group ref={ref}>
      <scene name='Scene' {...props}>
        <points>
          <sphereBufferGeometry attach='geometry' args={[1, 32, 32]} />
          <pointsMaterial
            attach='material'
            color={0xffffff}
            sizes={0.02}
            sizeAttenuation //merupakan parameter yang menscale object berdasarkan perspective camera
            transparent={false}
            alphaTest={1} //merupakan thresshold saat rendering untuk mencega bila opacity dibawah value alphatest
            opacity={1.0}
          />
          {/* <meshBasicMaterial attach='pMaterial' color={"red"} /> */}
          {/* <pointsMaterial  */}
          {/* <bufferGeometry attach='geometry' {...nodes.Object_0.geometry} />
          <meshStandardMaterial
            attach='material'
            {...nodes.Object_0.material}
            name='Material_0_COLOR_0'
          /> */}
        </points>
      </scene>
    </group>
  );
}
