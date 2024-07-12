import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystem = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    const planetGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    scene.add(planet);

    planet.position.x = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      sun.rotation.y += 0.01;
      planet.rotation.y += 0.02;

      planet.position.x = Math.cos(Date.now() * 0.001) * 5;
      planet.position.z = Math.sin(Date.now() * 0.001) * 5;

      renderer.render(scene, camera);
    };

    camera.position.z = 10;
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default SolarSystem;
