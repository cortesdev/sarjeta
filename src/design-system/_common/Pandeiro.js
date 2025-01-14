/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: IronEqual (https://sketchfab.com/ie-niels)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/tamborine-from-poly-by-google-b2509c183e404a2d89c406bc0f40243b
title: Tamborine from Poly by Google
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMediaQuery } from '@mui/material';
import { theme } from '../../styles/theme';


  
var camera, scene, renderer, light, model;

if (model) {
  Pandeiro.rotation.x += 0.01; 
}

export default function Pandeiro({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/pandeiro.gltf')
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.getElapsedTime()) * Math.PI / 8
  })
 
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / -3, .4, -.2]}>
        <group rotation={[Math.PI / -3, .8, .2]} scale={0.01}>
           <group scale={isMobile ? 285 : 300}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.lambert4SG} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.lambert2SG} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.lambert3SG} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pandeiro.gltf')
