import { Suspense, useRef } from "react";
import mazda from '../3d/mazda.glb'
import { useGLTF, useTexture } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(mazda);
  const paintColor = props.color;
  const wheelColor = props.wheelColor;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["01_MAIN_BODY"].geometry}
        material={materials["01,06,07 CAR_PAINT.001"]}
        position={[0, 0.98, 0]}
      >
        <meshStandardMaterial color={paintColor} metalness={0.6} roughness={0.4}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["02_WINDSHIELD"].geometry}
        material={materials["02,03,06,07 Glass.001"]}
        position={[0, 0.73, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["03_REAR_WINDOW_GLASS"].geometry}
        material={materials["02,03,06,07 Glass.001"]}
        position={[0, 0.82, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["04_SILENCER"].geometry}
        material={materials["04 Matal.001"]}
        position={[-3.04, -0.93, -9.36]}
        rotation={[1.57, 0, Math.PI]}
        scale={[0.22, 0.52, 0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["05_HEAD_LIGHT_GLASS"].geometry}
        material={materials["05,20,28 Glass for lights.001"]}
        position={[0, 0.81, 0]}
      >
        <meshStandardMaterial opacity={0.1} transparent={true}></meshStandardMaterial>
      </mesh>
      <group position={[0, 0.81, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005.geometry}
          material={materials["01,06,07 CAR_PAINT.001"]}
        >
          <meshStandardMaterial color={paintColor} metalness={0.6} roughness={0.4}></meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_1.geometry}
          material={materials["02,03,06,07 Glass.001"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_2.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh005_3.geometry}
          material={materials["06,19,23,24,26 Mirror for lights.001"]}
        />
      </group>
      <group position={[0, 0.81, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials["01,06,07 CAR_PAINT.001"]}
        >
          <meshStandardMaterial color={paintColor} metalness={0.6} roughness={0.4}></meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials["02,03,06,07 Glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_2.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["12_LIGHTS"].geometry}
        material={materials["12,18,32 Glass for lights.001"]}
        position={[0, -0.57, 0.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["13_NET"].geometry}
        material={materials["13 NETS.001"]}
        position={[-0.17, -0.43, 9.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["14_SHADOW_OBJECTS"].geometry}
        material={materials["14 Shadow.001"]}
        position={[0, -1.33, 9.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["15_OBJECT"].geometry}
        material={materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]}
        position={[0, 0.81, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["16_OBJECT"].geometry}
        material={materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]}
        position={[0, 0.73, 0]}
      />
      <group position={[0, 0.81, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh013_1.geometry}
          material={materials["17,22,24,30,33,34,36 Silver.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["18_OBJECT"].geometry}
        material={materials["12,18,32 Glass for lights.001"]}
        position={[0, 0.81, 0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["19_OBJECT"].geometry}
        material={materials["06,19,23,24,26 Mirror for lights.001"]}
        position={[0, 0.81, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["20_OBJECT"].geometry}
        material={materials["05,20,28 Glass for lights.001"]}
        position={[0, 0.81, 0]}
      ><meshStandardMaterial opacity={0.1} transparent={true}></meshStandardMaterial></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["21_OBJECT"].geometry}
        material={materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]}
        position={[0, 0.81, 0]}
      />
      <group position={[0, 0.8, -1.59]} rotation={[3.14, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh016_1.geometry}
          material={materials["22,25 Glass for break lights.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["23_OBJECT"].geometry}
        material={materials["06,19,23,24,26 Mirror for lights.001"]}
        position={[0, 0.8, -1.59]}
        rotation={[3.14, 0, Math.PI]}
      />
      <group position={[0, 0.8, -1.59]} rotation={[3.14, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh018_1.geometry}
          material={materials["17,22,24,30,33,34,36 Silver.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["25_OBJECT"].geometry}
        material={materials["22,25 Glass for break lights.001"]}
        position={[0, 0.8, -1.59]}
        rotation={[3.14, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["26_OBJECT"].geometry}
        material={materials["06,19,23,24,26 Mirror for lights.001"]}
        position={[-0.74, 0.8, -1.59]}
        rotation={[3.14, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["27_OBJECT"].geometry}
        material={materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]}
        position={[0, 0.81, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["28_OBJECT"].geometry}
        material={materials["05,20,28 Glass for lights.001"]}
        position={[0, 0.81, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["29_OBJECT"].geometry}
        material={materials["29 Glass for break lights in the door.001"]}
        position={[0, 0.81, 0]}
      />
      <group position={[0, 0.81, 0.19]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_1.geometry}
          material={materials["17,22,24,30,33,34,36 Silver.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["32_OBJECT"].geometry}
        material={materials["12,18,32 Glass for lights.001"]}
        position={[0, 0.81, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["33_OBJECT"].geometry}
        material={materials["17,22,24,30,33,34,36 Silver.001"]}
        position={[0, 0.81, 0]}
      />
      <group position={[0, 0.81, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials["17,22,24,30,33,34,36 Silver.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["35_OBJECT"].geometry}
        material={materials["35 Black.001"]}
        position={[0, 0.81, 0]}
      />
      <group position={[0, -0.57, 0.62]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028.geometry}
          material={
            materials["06,07,15,16,17,21,22,24,27,30,34,36 Plastic.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh028_1.geometry}
          material={materials["17,22,24,30,33,34,36 Silver.001"]}
        />
      </group>
      <group position={[-3.43, -1.03, 5.99]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials["08,09,10,11 Rime.001"]}
          >
          <meshStandardMaterial color={wheelColor} metalness={0.5}></meshStandardMaterial>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials["08,09,10,11 NUTS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_2.geometry}
          material={materials["08,09,10,11 DISK BREAKS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_3.geometry}
          material={materials["08,09,10,11 Tire.001"]}
        />
      </group>
      <group position={[3.43, -1.03, 5.99]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008.geometry}
          material={materials["08,09,10,11 Rime.001"]}
          >
          <meshStandardMaterial color={wheelColor} metalness={0.5}></meshStandardMaterial>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_1.geometry}
          material={materials["08,09,10,11 NUTS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_2.geometry}
          material={materials["08,09,10,11 DISK BREAKS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_3.geometry}
          material={materials["08,09,10,11 Tire.001"]}
        />
      </group>
      <group position={[-3.43, -1.09, -6.51]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials["08,09,10,11 Rime.001"]}
        >
          <meshStandardMaterial color={wheelColor} metalness={0.5}></meshStandardMaterial>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials["08,09,10,11 NUTS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_2.geometry}
          material={materials["08,09,10,11 DISK BREAKS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_3.geometry}
          material={materials["08,09,10,11 Tire.001"]}
        />
      </group>
      <group position={[3.43, -1.09, -6.51]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010.geometry}
          material={materials["08,09,10,11 Rime.001"]}
          >
          <meshStandardMaterial color={wheelColor} metalness={0.5}></meshStandardMaterial>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_1.geometry}
          material={materials["08,09,10,11 NUTS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_2.geometry}
          material={materials["08,09,10,11 DISK BREAKS.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_3.geometry}
          material={materials["08,09,10,11 Tire.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/mazda.glb");
