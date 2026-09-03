import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Bounds, Center } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo } from "react";

function makeCardTexture(frontUrl, backUrl) {
  const canvas = document.createElement("canvas");

  canvas.width = 1024;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not create 2D canvas context");
  }

  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  texture.flipY = false;

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

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.crossOrigin = "anonymous";

      img.onload = () => resolve(img);

      img.onerror = () => {
        reject(new Error(`Failed to load image: ${url}`));
      };

      img.src = url;
    });
  };


  Promise.all([loadImage(frontUrl), loadImage(backUrl)])
    .then(([frontImg, backImg]) => {
      // Background
      ctx.fillStyle = "#f3f3f3";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Front
      drawCover(
        frontImg,
        0,
        0,
        512,
        775
      );

      // Back
      drawCover(
        backImg,
        512,
        0,
        512,
        775
      );

      texture.needsUpdate = true;
    })
    .catch((error) => {
      console.error("Card texture error:", error);
    });

  return texture;
}

function CardModel({ frontImage, backImage }) {
  const { scene } = useGLTF("/card.glb");
  const cardTexture = useMemo(() => {
    return makeCardTexture(frontImage, backImage);
  }, [frontImage, backImage]);

  useEffect(() => {
    const materials = [];

    scene.traverse((child) => {
      if (!child.isMesh) return;

      if (
        child.name === "card" ||
        child.material?.name === "base"
      ) {

        const originalMaterial = child.material;

        const material = originalMaterial.clone();

        material.map = cardTexture;
        material.needsUpdate = true;

        child.material = material;

        materials.push(material);
      }
    });

    return () => {
      materials.forEach((material) => {
        material.map = null;
        material.dispose();
      });
    };
  }, [scene, cardTexture]);

  useEffect(() => {
    return () => {
      cardTexture.dispose();
    };
  }, [cardTexture]);

  return (
    <Center>
      <primitive
        object={scene}
        rotation={[0, 0, 0]}
      />
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
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          position: [0, 0, 4],
          fov: 32,
        }}
      >

        <ambientLight intensity={1.6} />

        <directionalLight
          position={[3, 5, 4]}
          intensity={2.2}
        />

        <directionalLight
          position={[-3, 2, -4]}
          intensity={0.8}
        />

        <Bounds
          fit
          clip
          observe
          margin={0.8}
        >
          <CardModel
            frontImage="/frontPart.png"
            backImage="/backPart.png"
          />
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

/*
 * Preload GLB
 * This makes loading smoother.
 */
useGLTF.preload("/card.glb");