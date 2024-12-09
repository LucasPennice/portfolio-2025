/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { modelAnimation } from "./animation";

type GLTFResult = {
    nodes: {
        Circle038: THREE.Mesh;
        Circle038_1: THREE.Mesh;
        Circle038_2: THREE.Mesh;
        Circle038_3: THREE.Mesh;
        Circle038_4: THREE.Mesh;
        AntennaLineBottom001: THREE.Mesh;
        AntennaLineTop001: THREE.Mesh;
        BackCameraBottomLens001: THREE.Mesh;
        AppleLogo001: THREE.Mesh;
        BackCameraBottomGreyRing001: THREE.Mesh;
        BackCameraP1001: THREE.Mesh;
        FlashBG001: THREE.Mesh;
        CameraBump001: THREE.Mesh;
        FrontCameraContainer001: THREE.Mesh;
        BackCameraTopGreyRing001: THREE.Mesh;
        BackCameraTopLens001: THREE.Mesh;
        FrontSpeakerBG001: THREE.Mesh;
        MuteSwitch001: THREE.Mesh;
        Circle032: THREE.Mesh;
        Circle032_1: THREE.Mesh;
        Circle031: THREE.Mesh;
        Circle031_1: THREE.Mesh;
        iPhoneLogo001: THREE.Mesh;
        VolumeButtons001: THREE.Mesh;
        SCREEN: THREE.Mesh;
    };
    materials: {
        ["FrameGrey.001"]: THREE.MeshStandardMaterial;
        ["Front.001"]: THREE.MeshStandardMaterial;
        ["Antennaline.001"]: THREE.MeshStandardMaterial;
        ["BackGrey.001"]: THREE.MeshStandardMaterial;
        ["Rubber.001"]: THREE.MeshStandardMaterial;
        ["Lens.001"]: THREE.MeshStandardMaterial;
        ["AppleLogo.001"]: THREE.MeshStandardMaterial;
        ["BackCaneraGrayRIng.002"]: THREE.MeshStandardMaterial;
        ["Black.015"]: THREE.MeshStandardMaterial;
        ["PinkFlash.002"]: THREE.MeshStandardMaterial;
        ["Frame.001"]: THREE.MeshStandardMaterial;
        ["FrontCameraBlack.002"]: THREE.MeshStandardMaterial;
        ["FrontSpeaker.001"]: THREE.MeshStandardMaterial;
        ["Black.014"]: THREE.MeshStandardMaterial;
        ["iPhoneLogo.001"]: THREE.MeshStandardMaterial;
        ["Display.002"]: THREE.MeshStandardMaterial;
    };
};

export function IPhoneModel() {
    //@ts-ignore
    const { nodes, materials } = useGLTF("/iphoneModel.gltf") as GLTFResult;
    return (
        //@ts-ignore
        <motion.group dispose={null} {...modelAnimation}>
            <group position={[0, 1.563, 0]}>
                <mesh geometry={nodes.Circle038.geometry} material={materials["FrameGrey.001"]} />
                <mesh geometry={nodes.Circle038_1.geometry} material={materials["Front.001"]} />
                <mesh geometry={nodes.Circle038_2.geometry} material={materials["Antennaline.001"]} />
                <mesh geometry={nodes.Circle038_3.geometry} material={materials["BackGrey.001"]} />
                <mesh geometry={nodes.Circle038_4.geometry} material={materials["Rubber.001"]} />
                <mesh geometry={nodes.AntennaLineBottom001.geometry} material={materials["Antennaline.001"]} position={[0, -2.676, 0]} />
                <mesh geometry={nodes.AntennaLineTop001.geometry} material={materials["Antennaline.001"]} position={[0, 0.018, 0]} />
                <mesh geometry={nodes.BackCameraBottomLens001.geometry} material={materials["Lens.001"]} position={[0.702, 0.884, -0.083]} />
                <mesh geometry={nodes.AppleLogo001.geometry} material={materials["AppleLogo.001"]} position={[0.171, 0.521, -0.079]} />
                <mesh
                    geometry={nodes.BackCameraBottomGreyRing001.geometry}
                    material={materials["BackCaneraGrayRIng.002"]}
                    position={[0.702, 0.884, -0.094]}
                />
                <mesh geometry={nodes.BackCameraP1001.geometry} material={materials["Black.015"]} position={[0.705, 1.027, -0.095]} />
                <mesh geometry={nodes.FlashBG001.geometry} material={materials["PinkFlash.002"]} position={[0.705, 1.027, -0.093]} />
                <mesh geometry={nodes.CameraBump001.geometry} material={materials["Frame.001"]} position={[0.704, 1.036, -0.079]} />
                <mesh
                    geometry={nodes.FrontCameraContainer001.geometry}
                    material={materials["FrontCameraBlack.002"]}
                    position={[0.335, 1.323, 0.08]}
                />
                <mesh
                    geometry={nodes.BackCameraTopGreyRing001.geometry}
                    material={materials["BackCaneraGrayRIng.002"]}
                    position={[0.702, 1.178, -0.094]}
                />
                <mesh geometry={nodes.BackCameraTopLens001.geometry} material={materials["Lens.001"]} position={[0.702, 1.178, -0.083]} />
                <mesh geometry={nodes.FrontSpeakerBG001.geometry} material={materials["FrontSpeaker.001"]} position={[0.156, 1.321, 0.077]} />
                <mesh geometry={nodes.MuteSwitch001.geometry} material={materials["FrameGrey.001"]} position={[-0.65, 0.92, 0.009]} />
                <group position={[0.97, 0.562, -0.004]}>
                    <mesh geometry={nodes.Circle032.geometry} material={materials["FrameGrey.001"]} />
                    <mesh geometry={nodes.Circle032_1.geometry} material={materials["Frame.001"]} />
                </group>
                <group position={[0.978, -0.043, 0]}>
                    <mesh geometry={nodes.Circle031.geometry} material={materials["Black.014"]} />
                    <mesh geometry={nodes.Circle031_1.geometry} material={materials["FrameGrey.001"]} />
                </group>
                <mesh geometry={nodes.iPhoneLogo001.geometry} material={materials["iPhoneLogo.001"]} position={[0.2, -1.175, -0.079]} />
                <mesh geometry={nodes.VolumeButtons001.geometry} material={materials["FrameGrey.001"]} position={[-0.658, 0.208, -0.002]} />
                <mesh geometry={nodes.SCREEN.geometry} material={materials["Display.002"]} />
            </group>
        </motion.group>
    );
}

useGLTF.preload("/iphoneModel.gltf");
