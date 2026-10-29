/**
 * DWI HARDIANTO - 3D WEBGL INTERACTIVE CANVAS
 * Powered by Three.js
 */

(function () {
  'use strict';

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });

  const isMobile = window.innerWidth < 768;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Group for all rotating 3D elements
  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Centerpiece 3D Crystal Structure
  const crystalGroup = new THREE.Group();
  mainGroup.add(crystalGroup);

  // 1. Outer Icosahedron Wireframe
  const outerGeo = new THREE.IcosahedronGeometry(7, 1);
  const outerMat = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const outerMesh = new THREE.Mesh(outerGeo, outerMat);
  crystalGroup.add(outerMesh);

  // 2. Inner Floating Core (Dual Tetrahedron / Octahedron)
  const innerGeo = new THREE.OctahedronGeometry(4, 0);
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true,
    transparent: true,
    opacity: 0.6
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  crystalGroup.add(innerMesh);

  // 3. Glowing Center Nucleus
  const nucleusGeo = new THREE.SphereGeometry(1.8, 16, 16);
  const nucleusMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.4
  });
  const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
  crystalGroup.add(nucleus);

  // 4. Orbital Rings
  const ringGeo1 = new THREE.TorusGeometry(10, 0.04, 8, 80);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    transparent: true,
    opacity: 0.25
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 3;
  crystalGroup.add(ring1);

  const ringGeo2 = new THREE.TorusGeometry(11.5, 0.04, 8, 80);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    transparent: true,
    opacity: 0.2
  });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 4;
  ring2.rotation.x = -Math.PI / 5;
  crystalGroup.add(ring2);

  // Position crystal appropriately based on viewport
  function adjustCrystalPosition() {
    if (window.innerWidth < 1024) {
      crystalGroup.position.set(0, 4, -4);
      crystalGroup.scale.set(0.65, 0.65, 0.65);
    } else {
      crystalGroup.position.set(11, 1, 0);
      crystalGroup.scale.set(0.95, 0.95, 0.95);
    }
  }
  adjustCrystalPosition();

  // Floating Cyber Particles Constellation
  const particleCount = isMobile ? 80 : 160;
  const particleGeo = new THREE.BufferGeometry();
  const particleCoords = new Float32Array(particleCount * 3);
  const particleVelocities = [];

  for (let i = 0; i < particleCount; i++) {
    const idx = i * 3;
    particleCoords[idx] = (Math.random() - 0.5) * 65;
    particleCoords[idx + 1] = (Math.random() - 0.5) * 50;
    particleCoords[idx + 2] = (Math.random() - 0.5) * 40;

    particleVelocities.push({
      x: (Math.random() - 0.5) * 0.015,
      y: (Math.random() - 0.5) * 0.015,
      z: (Math.random() - 0.5) * 0.015
    });
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: isMobile ? 0.4 : 0.6,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(particleGeo, particleMat);
  scene.add(particleSystem);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x06b6d4, 3, 50);
  pointLight1.position.set(15, 10, 10);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0x8b5cf6, 3, 50);
  pointLight2.position.set(-15, -10, 5);
  scene.add(pointLight2);

  // Mouse & Scroll Tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let scrollY = 0;
  let targetScrollY = 0;

  window.addEventListener('mousemove', function (e) {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('scroll', function () {
    targetScrollY = window.scrollY;
  }, { passive: true });

  // Touch Drag Interaction on mobile / canvas
  let isDragging = false;
  let prevTouchX = 0;
  let prevTouchY = 0;

  window.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      isDragging = true;
      prevTouchX = e.touches[0].clientX;
      prevTouchY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - prevTouchX;
      const deltaY = e.touches[0].clientY - prevTouchY;
      crystalGroup.rotation.y += deltaX * 0.005;
      crystalGroup.rotation.x += deltaY * 0.005;
      prevTouchX = e.touches[0].clientX;
      prevTouchY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', function () {
    isDragging = false;
  }, { passive: true });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth mouse lerp
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
    scrollY += (targetScrollY - scrollY) * 0.08;

    // Rotate Crystal Elements
    outerMesh.rotation.x = elapsedTime * 0.15;
    outerMesh.rotation.y = elapsedTime * 0.2;

    innerMesh.rotation.x = -elapsedTime * 0.25;
    innerMesh.rotation.y = -elapsedTime * 0.3;

    nucleus.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.1);

    ring1.rotation.z = elapsedTime * 0.18;
    ring2.rotation.z = -elapsedTime * 0.22;

    // Subtle parallax shift
    crystalGroup.rotation.y += (mouseX * 0.8 - crystalGroup.rotation.y * 0.2) * 0.03;
    crystalGroup.rotation.x += (-mouseY * 0.8 - crystalGroup.rotation.x * 0.2) * 0.03;

    // Scroll effect: move slightly and morph opacity/scale as user scrolls
    const scrollFactor = scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1);
    mainGroup.position.y = scrollFactor * 6;
    mainGroup.rotation.z = scrollFactor * 0.5;

    // Update floating particles
    const positions = particleGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] += particleVelocities[i].x;
      positions[idx + 1] += particleVelocities[i].y;
      positions[idx + 2] += particleVelocities[i].z;

      // Wrap around bounds
      if (Math.abs(positions[idx]) > 35) positions[idx] *= -0.95;
      if (Math.abs(positions[idx + 1]) > 30) positions[idx + 1] *= -0.95;
      if (Math.abs(positions[idx + 2]) > 25) positions[idx + 2] *= -0.95;
    }
    particleGeo.attributes.position.needsUpdate = true;

    // Camera micro movement
    camera.position.x = mouseX * 1.5;
    camera.position.y = -mouseY * 1.5;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  }

  animate();

  // Resize Listener
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    adjustCrystalPosition();
  });

})();

