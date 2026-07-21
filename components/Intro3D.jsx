"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import fontData from "./data/helvetiker-bold.typeface.json";

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const smoothStep = (value) => value * value * (3 - 2 * value);
const easeOutExpo = (value) => (value === 1 ? 1 : 1 - 2 ** (-10 * value));

const phases = [
  { threshold: 18, code: "01", label: "Thought", line: "A thought", accent: "becomes a signal." },
  { threshold: 36, code: "02", label: "Structure", line: "The signal", accent: "finds structure." },
  { threshold: 58, code: "03", label: "Context", line: "Structure", accent: "learns context." },
  { threshold: 80, code: "04", label: "Motion", line: "Context", accent: "moves with purpose." },
  { threshold: 101, code: "05", label: "Interface", line: "Thought becomes", accent: "interface." },
];

const createLetter = ({ font, character, x, color, emissive }) => {
  const geometry = new TextGeometry(character, {
    font,
    size: 2.7,
    depth: 0.5,
    curveSegments: 14,
    bevelEnabled: true,
    bevelThickness: 0.065,
    bevelSize: 0.04,
    bevelSegments: 5,
  });
  geometry.center();

  const material = new THREE.MeshPhysicalMaterial({
    color,
    emissive,
    emissiveIntensity: 0.62,
    metalness: 0.76,
    roughness: 0.16,
    clearcoat: 1,
    clearcoatRoughness: 0.14,
    transparent: true,
    opacity: 0,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;

  const edgeGeometry = new THREE.EdgesGeometry(geometry, 18);
  const edgeMaterial = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0 });
  const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
  edges.position.z = 0.012;

  const group = new THREE.Group();
  group.add(mesh, edges);
  group.position.set(x, character === "A" ? 1.7 : -1.5, -7);
  group.rotation.set(character === "A" ? 0.48 : -0.42, character === "A" ? -0.8 : 0.8, 0);
  group.scale.setScalar(0.08);
  group.userData = {
    startPosition: group.position.clone(),
    finalPosition: new THREE.Vector3(x, 0, 0),
    startRotation: group.rotation.clone(),
    material,
    edgeMaterial,
    resources: { geometry, material, edgeGeometry, edgeMaterial },
  };
  return group;
};

const panelLabels = ["CODE", "SYSTEMS", "AI", "RESEARCH", "AM / ID", "MOTION", "PROJECTS", "CREDENTIALS", "CONTACT"];

const createPanelContent = ({ font, width, height, index, color }) => {
  const group = new THREE.Group();
  const resources = [];
  const materials = [];
  const drawables = [];

  const addText = (text, size, position, opacity = 0.82) => {
    const geometry = new TextGeometry(text, {
      font,
      size,
      depth: 0.012,
      curveSegments: 6,
    });
    geometry.computeBoundingBox();
    geometry.translate(-(geometry.boundingBox?.min.x || 0), 0, 0);
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 });
    material.userData.targetOpacity = opacity;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    group.add(mesh);
    resources.push(geometry, material);
    materials.push(material);
    return mesh;
  };

  addText(panelLabels[index], 0.15, [-width / 2 + 0.18, height / 2 - 0.3, 0.045]);
  addText(String(index + 1).padStart(2, "0"), 0.11, [width / 2 - 0.42, height / 2 - 0.27, 0.045], 0.48);

  if (index === 4) {
    const mark = addText("AM", 0.5, [-0.5, -0.16, 0.05], 0.9);
    mark.userData.contentDelay = 0.1;
    const lineGeometry = new THREE.PlaneGeometry(width * 0.58, 0.022);
    const lineMaterial = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 });
    lineMaterial.userData.targetOpacity = 0.56;
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    line.position.set(0, -height * 0.31, 0.045);
    line.scale.x = 0.001;
    group.add(line);
    resources.push(lineGeometry, lineMaterial);
    materials.push(lineMaterial);
    drawables.push({ object: line, type: "scale", delay: 0.18 });
  } else if (index % 3 === 0) {
    const lengths = [0.78, 0.5, 0.68, 0.38];
    lengths.forEach((length, lineIndex) => {
      const geometry = new THREE.PlaneGeometry(width * length, 0.022);
      const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 });
      material.userData.targetOpacity = 0.5 - lineIndex * 0.055;
      const line = new THREE.Mesh(geometry, material);
      line.position.set(-width / 2 + 0.18 + (width * length) / 2, height * 0.16 - lineIndex * 0.19, 0.045);
      line.scale.x = 0.001;
      group.add(line);
      resources.push(geometry, material);
      materials.push(material);
      drawables.push({ object: line, type: "scale", delay: lineIndex * 0.08 });
    });
  } else if (index % 3 === 1) {
    for (let blockIndex = 0; blockIndex < 6; blockIndex += 1) {
      const geometry = new THREE.PlaneGeometry(width * 0.2, height * 0.18);
      const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0 });
      material.userData.targetOpacity = 0.16 + (blockIndex % 3) * 0.06;
      const block = new THREE.Mesh(geometry, material);
      block.position.set(
        -width * 0.25 + (blockIndex % 3) * width * 0.25,
        height * 0.11 - Math.floor(blockIndex / 3) * height * 0.25,
        0.045,
      );
      block.scale.setScalar(0.001);
      group.add(block);
      resources.push(geometry, material);
      materials.push(material);
      drawables.push({ object: block, type: "scaleBoth", delay: blockIndex * 0.055 });
    }
  } else {
    const points = [];
    for (let pointIndex = 0; pointIndex < 9; pointIndex += 1) {
      points.push(new THREE.Vector3(
        -width * 0.38 + pointIndex * width * 0.095,
        Math.sin(pointIndex * 1.35 + index) * height * 0.18 - height * 0.08,
        0.05,
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    geometry.setDrawRange(0, 0);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0 });
    material.userData.targetOpacity = 0.66;
    const chart = new THREE.Line(geometry, material);
    group.add(chart);
    resources.push(geometry, material);
    materials.push(material);
    drawables.push({ object: chart, type: "draw", delay: 0.08, pointCount: points.length });
  }

  group.userData = { resources, materials, drawables };
  return group;
};

const Intro3D = ({ onComplete }) => {
  const mountRef = useRef(null);
  const leavingRef = useRef(false);
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const activePhase = phases.findIndex((phase) => progress < phase.threshold);
  const phase = phases[Math.max(0, activePhase)];

  const beginExit = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    setLeaving(true);
    window.setTimeout(onComplete, reducedMotion ? 180 : 1200);
  }, [onComplete, reducedMotion]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  useEffect(() => {
    const duration = reducedMotion ? 260 : 7600;
    const startedAt = window.performance.now();
    const progressTimer = window.setInterval(() => {
      const next = Math.min(100, Math.round(((window.performance.now() - startedAt) / duration) * 100));
      setProgress(next);
      if (next >= 100) {
        setReady(true);
        window.clearInterval(progressTimer);
      }
    }, 50);
    const readyTimer = window.setTimeout(() => setReady(true), duration);
    const autoExitTimer = window.setTimeout(beginExit, reducedMotion ? 1200 : 11200);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(readyTimer);
      window.clearTimeout(autoExitTimer);
    };
  }, [beginExit, reducedMotion]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060708);
    scene.fog = new THREE.FogExp2(0x060708, 0.045);

    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
    camera.position.set(0, 0.15, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.className = "intro-webgl-canvas";
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const font = new FontLoader().parse(fontData);
    const monogramRoot = new THREE.Group();
    const letters = [
      createLetter({ font, character: "A", x: -2.15, color: 0xdde6e8, emissive: 0x243538 }),
      createLetter({ font, character: "M", x: 2.2, color: 0xdde6e8, emissive: 0x243538 }),
    ];
    letters.forEach((letter) => monogramRoot.add(letter));

    const slashCurve = new THREE.LineCurve3(
      new THREE.Vector3(-0.76, -2.08, 0),
      new THREE.Vector3(0.76, 2.08, 0),
    );
    const slashGeometry = new THREE.TubeGeometry(slashCurve, 72, 0.095, 10, false);
    const slashMaterial = new THREE.MeshBasicMaterial({ color: 0x7ae7f7, transparent: true, opacity: 0 });
    const slash = new THREE.Mesh(slashGeometry, slashMaterial);
    const slashHaloGeometry = new THREE.TubeGeometry(slashCurve, 72, 0.24, 10, false);
    const slashHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0x7ae7f7,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const slashHalo = new THREE.Mesh(slashHaloGeometry, slashHaloMaterial);
    const slashRoot = new THREE.Group();
    slashRoot.add(slashHalo, slash);
    slashRoot.scale.set(1, 0.001, 1);
    monogramRoot.add(slashRoot);
    scene.add(monogramRoot);

    const threadRoot = new THREE.Group();
    const threads = [];
    const threadCount = window.innerWidth < 640 ? 18 : 28;
    for (let index = 0; index < threadCount; index += 1) {
      const side = index % 2 === 0 ? -1 : 1;
      const lane = Math.floor(index / 2);
      const start = new THREE.Vector3(side * (8.4 + (lane % 4) * 0.4), -3.8 + (lane % 9) * 0.92, -1.6 - (lane % 3));
      const end = new THREE.Vector3(side * (1.45 + (lane % 5) * 0.22), -1.75 + (lane % 6) * 0.7, 0.1);
      const control = new THREE.Vector3(side * (3.6 + (lane % 3) * 0.7), Math.sin(index * 1.7) * 2.4, 1.6 - (lane % 4) * 0.45);
      const curve = new THREE.QuadraticBezierCurve3(start, control, end);
      const points = curve.getPoints(56);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      geometry.setDrawRange(0, 0);
      const color = index % 4 === 0 ? 0xb7f34a : 0x7ae7f7;
      const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0 });
      const line = new THREE.Line(geometry, material);
      line.userData = { curve, delay: (index % 8) * 0.055, pointCount: points.length, geometry, material };
      threadRoot.add(line);
      threads.push(line);
    }
    scene.add(threadRoot);

    const sparkGeometry = new THREE.OctahedronGeometry(0.055, 0);
    const sparkMaterial = new THREE.MeshBasicMaterial({ vertexColors: true });
    const threadSparks = new THREE.InstancedMesh(sparkGeometry, sparkMaterial, threadCount);
    threadSparks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let index = 0; index < threadCount; index += 1) {
      threadSparks.setColorAt(index, new THREE.Color(index % 4 === 0 ? 0xb7f34a : 0x7ae7f7));
    }
    if (threadSparks.instanceColor) threadSparks.instanceColor.needsUpdate = true;
    threadRoot.add(threadSparks);
    const sparkDummy = new THREE.Object3D();

    const environmentRoot = new THREE.Group();
    const planes = [];
    for (let index = 0; index < 9; index += 1) {
      const width = 2.1 + (index % 3) * 0.62;
      const height = 1.2 + (index % 2) * 0.48;
      const geometry = new THREE.PlaneGeometry(width, height);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x0b1113,
        emissive: index % 3 === 0 ? 0x0a262b : 0x12170b,
        emissiveIntensity: 0.5,
        metalness: 0.64,
        roughness: 0.24,
        clearcoat: 1,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      const panel = new THREE.Mesh(geometry, material);
      const edgeGeometry = new THREE.EdgesGeometry(geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({
        color: index % 3 === 0 ? 0xb7f34a : 0x7ae7f7,
        transparent: true,
        opacity: 0,
      });
      const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      edges.position.z = 0.012;
      const content = createPanelContent({
        font,
        width,
        height,
        index,
        color: index % 3 === 0 ? 0xb7f34a : 0x7ae7f7,
      });
      const group = new THREE.Group();
      group.add(panel, edges, content);

      const column = index % 3;
      const row = Math.floor(index / 3);
      const startPosition = new THREE.Vector3(
        Math.cos(index * 1.62) * (4.5 + (index % 2) * 0.9),
        Math.sin(index * 1.17) * 2.7,
        -2.5 - index * 0.72,
      );
      const finalPosition = new THREE.Vector3((column - 1) * 3.05, (1 - row) * 1.82, -4.3);
      const startRotation = new THREE.Euler(
        Math.sin(index) * 0.28,
        Math.cos(index * 0.8) * 0.58,
        Math.sin(index * 1.3) * 0.16,
      );
      group.position.copy(startPosition);
      group.rotation.copy(startRotation);
      group.scale.setScalar(0);
      group.userData = {
        index,
        startPosition,
        finalPosition,
        startRotation,
        material,
        edgeMaterial,
        content,
        resources: { geometry, material, edgeGeometry, edgeMaterial },
      };
      environmentRoot.add(group);
      planes.push(group);
    }

    const ribbons = [];
    for (let index = 0; index < 5; index += 1) {
      const points = [];
      for (let step = 0; step < 7; step += 1) {
        points.push(new THREE.Vector3(
          -7 + step * 2.34,
          Math.sin(step * 1.12 + index * 0.82) * (0.65 + index * 0.08) + (index - 2) * 0.48,
          -3.8 - index * 0.66 + Math.cos(step + index) * 0.28,
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, 96, 0.018 + index * 0.005, 6, false);
      const material = new THREE.MeshBasicMaterial({
        color: index % 2 === 0 ? 0x7ae7f7 : 0xb7f34a,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ribbon = new THREE.Mesh(geometry, material);
      ribbon.userData = { index, geometry, material };
      environmentRoot.add(ribbon);
      ribbons.push(ribbon);
    }

    const nodeCount = window.innerWidth < 640 ? 36 : 64;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x7ae7f7,
      size: window.innerWidth < 640 ? 0.055 : 0.07,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    environmentRoot.add(nodes);

    const connectionPositions = new Float32Array(nodeCount * 2 * 3);
    const connectionGeometry = new THREE.BufferGeometry();
    connectionGeometry.setAttribute("position", new THREE.BufferAttribute(connectionPositions, 3));
    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0x7ae7f7, transparent: true, opacity: 0 });
    const connections = new THREE.LineSegments(connectionGeometry, connectionMaterial);
    environmentRoot.add(connections);
    scene.add(environmentRoot);

    const starCount = window.innerWidth < 640 ? 340 : 720;
    const starPositions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index += 1) {
      const offset = index * 3;
      starPositions[offset] = (Math.random() - 0.5) * 22;
      starPositions[offset + 1] = (Math.random() - 0.5) * 13;
      starPositions[offset + 2] = (Math.random() - 0.5) * 18 - 3;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0x9bdde7,
      size: window.innerWidth < 640 ? 0.018 : 0.024,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const floor = new THREE.GridHelper(28, 28, 0x263337, 0x111719);
    floor.position.set(0, -3.3, -5.5);
    const floorMaterials = Array.isArray(floor.material) ? floor.material : [floor.material];
    floorMaterials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0;
    });
    scene.add(floor);

    const ambient = new THREE.AmbientLight(0xeaf7ff, 0.72);
    const cyanLight = new THREE.PointLight(0x7ae7f7, 64, 26, 2);
    cyanLight.position.set(4.8, 2.8, 6.5);
    const sparkLight = new THREE.PointLight(0xb7f34a, 48, 24, 2);
    sparkLight.position.set(-4.8, -2.2, 5.5);
    const topLight = new THREE.SpotLight(0xffffff, 72, 30, Math.PI / 5, 0.72, 1.4);
    topLight.position.set(0, 7, 8);
    topLight.target = monogramRoot;
    scene.add(ambient, cyanLight, sparkLight, topLight);

    let frameId = 0;
    let visible = true;
    let elapsed = 0;
    let exitElapsed = 0;
    let lastTime = window.performance.now();
    let pixelCheckComplete = false;
    let monogramScale = window.innerWidth < 640 ? 0.58 : 1;
    const pointer = new THREE.Vector2();
    const smoothPointer = new THREE.Vector2();

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      const isMobile = width < 640;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.35 : 1.8));
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.fov = isMobile ? 55 : 44;
      camera.updateProjectionMatrix();
      monogramScale = isMobile ? 0.58 : 1;
      threadRoot.scale.setScalar(isMobile ? 0.66 : 1);
      environmentRoot.scale.setScalar(isMobile ? 0.54 : 1);
    };

    const handlePointerMove = (event) => {
      if (reducedMotion) return;
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };

    const handleVisibility = () => {
      visible = !document.hidden;
      if (visible) lastTime = window.performance.now();
    };

    const render = (now) => {
      frameId = window.requestAnimationFrame(render);
      if (!visible) return;

      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      elapsed += reducedMotion ? 0 : delta;
      if (leavingRef.current) exitElapsed += delta;
      smoothPointer.lerp(pointer, 0.045);

      const slashDraw = reducedMotion ? 1 : smoothStep(clamp01((elapsed - 0.12) / 0.88));
      const threadReveal = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 0.42) / 1.5));
      const letterReveal = reducedMotion ? 1 : smoothStep(clamp01((elapsed - 0.92) / 1.45));
      const portalProgress = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 2.5) / 1.35));
      const portalFade = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 3.18) / 0.78));
      const worldReveal = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 3.42) / 1.12));
      const contextReveal = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 4.15) / 0.9));
      const finalSettle = reducedMotion ? 0 : smoothStep(clamp01((elapsed - 5.95) / 1.28));

      slashRoot.scale.y = 0.001 + slashDraw * 0.999;
      slashMaterial.opacity = slashDraw * (1 - portalFade) * 0.96;
      slashHaloMaterial.opacity = slashDraw * (1 - portalFade) * (0.1 + Math.sin(elapsed * 2.2) * 0.025);

      letters.forEach((letter, index) => {
        const { startPosition, finalPosition, startRotation, material, edgeMaterial } = letter.userData;
        const reveal = easeOutExpo(letterReveal);
        letter.position.lerpVectors(startPosition, finalPosition, reveal);
        letter.rotation.x = THREE.MathUtils.lerp(startRotation.x, -smoothPointer.y * 0.045, reveal);
        letter.rotation.y = THREE.MathUtils.lerp(startRotation.y, smoothPointer.x * 0.07, reveal);
        letter.rotation.z = (index === 0 ? -1 : 1) * Math.sin(elapsed * 0.44) * 0.006;
        letter.scale.setScalar(0.08 + reveal * 0.92);
        material.opacity = letterReveal * (1 - portalFade);
        edgeMaterial.opacity = letterReveal * (1 - portalFade) * 0.62;
      });

      threads.forEach((line, index) => {
        const { delay, pointCount, curve, material } = line.userData;
        const local = clamp01((elapsed - 0.34 - delay) / 1.34);
        const fade = 1 - smoothStep(clamp01((elapsed - 2.42) / 0.72));
        line.geometry.setDrawRange(0, Math.max(0, Math.floor(pointCount * local)));
        material.opacity = local * fade * 0.72;
        const sparkPosition = curve.getPoint(clamp01(local));
        sparkDummy.position.copy(sparkPosition);
        const sparkScale = local > 0 && local < 1 ? fade * (0.8 + Math.sin(elapsed * 6 + index) * 0.22) : 0;
        sparkDummy.scale.setScalar(Math.max(0, sparkScale));
        sparkDummy.rotation.set(elapsed + index, elapsed * 0.8, index);
        sparkDummy.updateMatrix();
        threadSparks.setMatrixAt(index, sparkDummy.matrix);
      });
      threadSparks.instanceMatrix.needsUpdate = true;

      monogramRoot.rotation.y = smoothPointer.x * 0.055 + Math.sin(elapsed * 0.26) * 0.014;
      monogramRoot.rotation.x = -smoothPointer.y * 0.024;
      monogramRoot.scale.setScalar(monogramScale * (1 + portalProgress * 2.85 + exitElapsed * 0.9));

      planes.forEach((plane, index) => {
        const { startPosition, finalPosition, startRotation, material, edgeMaterial, content } = plane.userData;
        const floatingPosition = startPosition.clone();
        floatingPosition.x += Math.sin(elapsed * 0.48 + index) * 0.3;
        floatingPosition.y += Math.cos(elapsed * 0.42 + index * 0.7) * 0.2;
        plane.position.lerpVectors(floatingPosition, finalPosition, finalSettle);
        plane.rotation.x = THREE.MathUtils.lerp(startRotation.x, 0, finalSettle);
        plane.rotation.y = THREE.MathUtils.lerp(startRotation.y, 0, finalSettle);
        plane.rotation.z = THREE.MathUtils.lerp(startRotation.z, 0, finalSettle);
        const revealScale = worldReveal * (0.74 + ((index % 3) + 1) * 0.08);
        plane.scale.setScalar(THREE.MathUtils.lerp(revealScale, 0.92, finalSettle));
        material.opacity = worldReveal * (0.26 + (index % 3) * 0.045 + finalSettle * 0.12);
        edgeMaterial.opacity = worldReveal * (0.38 + finalSettle * 0.24);
        const contentReveal = smoothStep(clamp01((finalSettle - index * 0.025) / 0.72));
        content.userData.materials.forEach((contentMaterial) => {
          contentMaterial.opacity = contentReveal * contentMaterial.userData.targetOpacity;
        });
        content.userData.drawables.forEach((drawable) => {
          const drawableReveal = smoothStep(clamp01((contentReveal - drawable.delay) / Math.max(0.01, 1 - drawable.delay)));
          if (drawable.type === "scale") drawable.object.scale.x = Math.max(0.001, drawableReveal);
          if (drawable.type === "scaleBoth") drawable.object.scale.setScalar(Math.max(0.001, drawableReveal));
          if (drawable.type === "draw") {
            drawable.object.geometry.setDrawRange(0, Math.floor(drawable.pointCount * drawableReveal));
          }
        });
      });

      ribbons.forEach((ribbon, index) => {
        const ribbonReveal = worldReveal * (1 - finalSettle * 0.82);
        ribbon.material.opacity = ribbonReveal * (0.22 + index * 0.018);
        ribbon.rotation.z = Math.sin(elapsed * 0.28 + index) * 0.025;
        ribbon.position.y = Math.sin(elapsed * 0.62 + index * 0.8) * 0.16;
      });

      for (let index = 0; index < nodeCount; index += 1) {
        const offset = index * 3;
        const angle = (index / nodeCount) * Math.PI * 2 + elapsed * 0.13;
        const radius = 2.6 + (index % 6) * 0.14 + Math.sin(elapsed * 0.9 + index) * 0.16;
        const wave = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle * 2.1) * 1.45,
          -3.7 + Math.sin(angle * 3 + index * 0.2) * 1.18,
        );
        const grid = new THREE.Vector3(
          ((index % 8) - 3.5) * 0.78,
          (3.5 - Math.floor(index / 8)) * 0.48,
          -4.05,
        );
        const position = wave.lerp(grid, finalSettle);
        nodePositions[offset] = position.x;
        nodePositions[offset + 1] = position.y;
        nodePositions[offset + 2] = position.z;
      }
      nodeGeometry.attributes.position.needsUpdate = true;
      for (let index = 0; index < nodeCount; index += 1) {
        const next = (index + 1) % nodeCount;
        const segmentOffset = index * 6;
        connectionPositions[segmentOffset] = nodePositions[index * 3];
        connectionPositions[segmentOffset + 1] = nodePositions[index * 3 + 1];
        connectionPositions[segmentOffset + 2] = nodePositions[index * 3 + 2];
        connectionPositions[segmentOffset + 3] = nodePositions[next * 3];
        connectionPositions[segmentOffset + 4] = nodePositions[next * 3 + 1];
        connectionPositions[segmentOffset + 5] = nodePositions[next * 3 + 2];
      }
      connectionGeometry.attributes.position.needsUpdate = true;
      nodeMaterial.opacity = contextReveal * (0.74 - finalSettle * 0.42);
      connectionMaterial.opacity = contextReveal * (0.12 - finalSettle * 0.06);

      floorMaterials.forEach((material) => {
        material.opacity = worldReveal * (0.13 + finalSettle * 0.08);
      });
      stars.rotation.y += delta * (0.012 + portalProgress * 0.038);
      stars.position.z += leavingRef.current ? delta * 2.5 : 0;
      environmentRoot.rotation.y = smoothPointer.x * 0.035 + Math.sin(elapsed * 0.16) * worldReveal * 0.025;
      environmentRoot.rotation.x = -smoothPointer.y * 0.018;

      cyanLight.position.x = 4.8 - smoothPointer.x * 2.2;
      sparkLight.position.x = -4.8 + smoothPointer.x * 1.8;
      cyanLight.intensity = 64 + worldReveal * 22 + Math.sin(elapsed * 1.7) * 4;
      sparkLight.intensity = 48 + contextReveal * 24;

      const cameraEntrance = reducedMotion ? 1 : easeOutExpo(clamp01(elapsed / 2.2));
      const baseZ = 14 - cameraEntrance * 3.55 - portalProgress * 5.15;
      const settledZ = THREE.MathUtils.lerp(baseZ, 7.15, finalSettle);
      const targetX = smoothPointer.x * 0.32 + worldReveal * Math.sin(elapsed * 0.38) * (1 - finalSettle) * 0.34;
      const targetY = 0.15 + smoothPointer.y * 0.2 + worldReveal * Math.cos(elapsed * 0.31) * (1 - finalSettle) * 0.2;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.position.z = Math.max(2.9, settledZ - exitElapsed * 6.8);
      camera.lookAt(0, 0, -2.2 * worldReveal);
      renderer.render(scene, camera);

      if (!pixelCheckComplete && (reducedMotion || elapsed > 5.35)) {
        const gl = renderer.getContext();
        const sampleSize = Math.min(112, renderer.domElement.width, renderer.domElement.height);
        const sample = new Uint8Array(sampleSize * sampleSize * 4);
        const sampleX = Math.max(0, Math.floor((renderer.domElement.width - sampleSize) / 2));
        const sampleY = Math.max(0, Math.floor((renderer.domElement.height - sampleSize) / 2));
        gl.readPixels(sampleX, sampleY, sampleSize, sampleSize, gl.RGBA, gl.UNSIGNED_BYTE, sample);
        let litPixels = 0;
        let coloredPixels = 0;
        for (let index = 0; index < sample.length; index += 4) {
          const red = sample[index];
          const green = sample[index + 1];
          const blue = sample[index + 2];
          if (red + green + blue > 62) litPixels += 1;
          if (Math.max(red, green, blue) - Math.min(red, green, blue) > 16) coloredPixels += 1;
        }
        renderer.domElement.dataset.webglReady = "true";
        renderer.domElement.dataset.litPixels = String(litPixels);
        renderer.domElement.dataset.coloredPixels = String(coloredPixels);
        pixelCheckComplete = true;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      letters.forEach((letter) => {
        Object.values(letter.userData.resources).forEach((resource) => resource.dispose());
      });
      slashGeometry.dispose();
      slashMaterial.dispose();
      slashHaloGeometry.dispose();
      slashHaloMaterial.dispose();
      threads.forEach((line) => {
        line.userData.geometry.dispose();
        line.userData.material.dispose();
      });
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      planes.forEach((plane) => {
        Object.values(plane.userData.resources).forEach((resource) => resource.dispose());
        plane.userData.content.userData.resources.forEach((resource) => resource.dispose());
      });
      ribbons.forEach((ribbon) => {
        ribbon.userData.geometry.dispose();
        ribbon.userData.material.dispose();
      });
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      floor.geometry.dispose();
      floorMaterials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [reducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-[500] h-[100svh] overflow-hidden bg-canvas text-white"
      initial={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
      animate={leaving
        ? { opacity: 1, clipPath: "inset(0 100% 0 0)" }
        : { opacity: 1, clipPath: "inset(0 0 0 0)" }}
      transition={{ duration: reducedMotion ? 0.15 : 1.2, ease: [0.76, 0, 0.24, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
    >
      <div ref={mountRef} className="absolute inset-0" />
      <div className="signal-grid pointer-events-none absolute inset-0 opacity-[0.1]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(6,7,8,.15)_48%,rgba(6,7,8,.92)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,8,.12),transparent_45%,rgba(6,7,8,.78)_100%)]" />

      <AnimatePresence>
        {leaving && !reducedMotion && (
          <motion.div
            className="pointer-events-none absolute inset-y-0 z-40 w-px bg-ice shadow-[0_0_42px_12px_rgba(122,231,247,.45)]"
            initial={{ x: "-2vw" }}
            animate={{ x: "102vw" }}
            transition={{ duration: 1.14, ease: [0.76, 0, 0.24, 1] }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-6 lg:p-9">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/[0.06] text-sm font-black text-white backdrop-blur-md">AM</span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white">Abdulrahman Mudher</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">From thought to interface</p>
            </div>
          </motion.div>

          <button
            type="button"
            onClick={beginExit}
            className="flex h-11 items-center justify-center rounded-md border border-white/15 bg-canvas/45 px-4 text-[10px] font-black uppercase tracking-[0.18em] text-white/75 backdrop-blur-md transition hover:border-ice hover:text-ice"
          >
            Skip intro
          </button>
        </div>

        <div className="mt-auto flex items-end justify-between gap-5 pb-2 lg:pb-0">
          <motion.div
            className="min-w-0 max-w-2xl flex-1"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.8 }}
          >
            <p className="eyebrow" aria-live="polite">{phase.code} / {phase.label}</p>
            <div className="relative mt-3 min-h-[4rem] overflow-hidden sm:min-h-[5rem] lg:min-h-[6rem]">
              <AnimatePresence mode="sync" initial={false}>
                <motion.h1
                  key={phase.code}
                  className="absolute inset-x-0 top-0 text-[1.9rem] font-black leading-[0.92] sm:text-4xl lg:text-5xl"
                  initial={{ y: 38, opacity: 0, filter: "blur(7px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -28, opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                >
                  {phase.line}
                  <span className="text-gradient block">{phase.accent}</span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center gap-2" aria-hidden="true">
              {phases.map((item, index) => (
                <motion.span
                  key={item.code}
                  className={`h-1 rounded-full ${index <= activePhase ? "bg-ice" : "bg-white/15"}`}
                  animate={{ width: index === activePhase ? 32 : 6, opacity: index <= activePhase ? 1 : 0.55 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>
          </motion.div>

          <AnimatePresence>
            {ready && (
              <motion.button
                type="button"
                onClick={beginExit}
                className="group hidden min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.08] px-7 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl transition hover:border-ice hover:text-ice sm:flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Enter portfolio
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 min-h-[54px] sm:hidden">
          <AnimatePresence>
            {ready && (
              <motion.button
                type="button"
                onClick={beginExit}
                className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.08] text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Enter portfolio
                <HiOutlineArrowRight size={18} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro3D;
