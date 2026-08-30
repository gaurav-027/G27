import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo } from "react";

function makeCardTexture(frontUrl, backUrl) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 2048;

  const ctx = canvas.getContext("2d");

  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const drawCover = (img, x, y, w, h) => {
    const imgRatio = img.width / img.height;
    const boxRatio = w / h;

    let dw = w;
    let dh = h;
    let dx = x;
    let dy = y;

    if (imgRatio > boxRatio) {
      dh = h;
      dw = h * imgRatio;
      dx = x - (dw - w) / 2;
    } else {
      dw = w;
      dh = w / imgRatio;
      dy = y - (dh - h) / 2;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  };

  Promise.all([
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.src = frontUrl;
    }),
    new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.src = backUrl;
    }),
  ]).then(([frontImg, backImg]) => {
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Front side
    drawCover(frontImg, 0, 0, 1024, 1550);

    // Back side
    drawCover(backImg, 1024, 0, 1024, 1550);

    texture.needsUpdate = true;
  });

  return texture;
}

function CardModel({ frontImage, backImage }) {
  const { scene } = useGLTF("/card.glb");

  const cardTexture = useMemo(() => {
    return makeCardTexture(frontImage, backImage);
  }, [frontImage, backImage]);

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      if (child.name === "card" || child.material?.name === "base") {
        child.material.map = cardTexture;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, cardTexture]);

  return (
    <Center>
  <group scale={2}>
    <primitive object={scene} rotation={[0, 0, 0]} />
  </group>
</Center>
  );
}

export default function Model() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
        cursor: "grab",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 32,
        }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 5, 4]} intensity={2.2} />
        <directionalLight position={[-3, 2, -4]} intensity={0.8} />

        <Bounds fit clip observe margin={0.75}>
          <CardModel frontImage="/frontPart.png" backImage="/backPart.png" />
        </Bounds>

        <OrbitControls
          makeDefault
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.7}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.55}
        />
      </Canvas>
    </div>
  );
}