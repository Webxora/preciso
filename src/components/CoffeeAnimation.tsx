
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { isWebGLSupported, getOptimalPixelRatio } from "./utils/three-helpers";

// Helper to check if running in browser environment
const isBrowser = typeof window !== "undefined";

export function CoffeeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  useEffect(() => {
    // Safety check for browser environment and container ref
    if (!isBrowser || !containerRef.current) return;
    
    // Check if WebGL is supported
    if (!isWebGLSupported()) {
      console.warn("WebGL is not supported in this browser. Falling back to static content.");
      setIsLoading(false);
      return;
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      35, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 6;
    camera.position.y = 0;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(getOptimalPixelRatio());
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    
    // Enhanced lighting setup for better realism
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Key light - main light source
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048; // Higher resolution shadows
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 20;
    mainLight.shadow.radius = 4; // Softer shadow edges
    scene.add(mainLight);
    
    // Rim light for definition
    const rimLight = new THREE.DirectionalLight(0xf5f5f5, 0.8);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);
    
    // Fill light for softer shadows
    const fillLight = new THREE.DirectionalLight(0xfff8e0, 0.4); // Warm fill light
    fillLight.position.set(0, -3, 5);
    scene.add(fillLight);
    
    // Cup group to hold all cup elements
    const cupGroup = new THREE.Group();
    
    // Cup texture loader
    const textureLoader = new THREE.TextureLoader();
    
    // Enhanced cup material with subtle texture
    const cupMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xf7f7f7,
      roughness: 0.15,
      metalness: 0.05,
      envMapIntensity: 1.0
    });
    
    // Define cup dimensions
    const cupTopRadius = 0.85;
    const cupBottomRadius = 0.65;
    const cupHeight = 1.2;
    const cupThickness = 0.08;
    
    // Create cup body
    const cupGeometry = new THREE.CylinderGeometry(
      cupTopRadius, cupBottomRadius, cupHeight, 64, 12, false
    );
    const cup = new THREE.Mesh(cupGeometry, cupMaterial);
    cup.castShadow = true;
    cup.receiveShadow = true;
    
    // Inner cup (interior)
    const innerCupGeometry = new THREE.CylinderGeometry(
      cupTopRadius - cupThickness, 
      cupBottomRadius - cupThickness, 
      cupHeight - cupThickness*2, 
      64, 12, false
    );
    const innerCupMaterial = new THREE.MeshStandardMaterial({
      color: 0xe0e0e0,
      roughness: 0.2,
      metalness: 0
    });
    const innerCup = new THREE.Mesh(innerCupGeometry, innerCupMaterial);
    innerCup.position.y = 0;
    cup.add(innerCup);
    
    // Create cup saucer with more detail
    const saucerTopGeometry = new THREE.CylinderGeometry(
      1.7, 1.7, 0.05, 64, 1, false
    );
    const saucerTop = new THREE.Mesh(saucerTopGeometry, cupMaterial);
    saucerTop.position.y = -cupHeight / 2 - 0.02;
    saucerTop.castShadow = true;
    saucerTop.receiveShadow = true;
    
    // Add a base to the saucer for more dimension
    const saucerBaseGeometry = new THREE.CylinderGeometry(
      1.2, 1.25, 0.08, 64, 1, false
    );
    const saucerBase = new THREE.Mesh(saucerBaseGeometry, cupMaterial);
    saucerBase.position.y = -cupHeight / 2 - 0.08;
    saucerBase.castShadow = true;
    saucerBase.receiveShadow = true;
    
    // Create rim for saucer
    const saucerRimGeometry = new THREE.TorusGeometry(1.7, 0.03, 16, 100);
    const saucerRim = new THREE.Mesh(saucerRimGeometry, cupMaterial);
    saucerRim.position.y = -cupHeight / 2;
    saucerRim.rotation.x = Math.PI / 2;
    saucerRim.castShadow = true;
    saucerRim.receiveShadow = true;
    
    // Create coffee liquid
    const coffeeGeometry = new THREE.CylinderGeometry(
      cupTopRadius - cupThickness - 0.01,
      cupBottomRadius - cupThickness - 0.01,
      0.2,
      64, 2, false
    );
    
    // More realistic coffee material
    const coffeeMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3a1a0a,
      roughness: 0.1,
      metalness: 0.2,
      envMapIntensity: 1.2
    });
    
    const coffee = new THREE.Mesh(coffeeGeometry, coffeeMaterial);
    coffee.position.y = cupHeight / 2 - 0.15;
    coffee.castShadow = true;
    coffee.receiveShadow = true;
    
    // Create coffee surface shine effect
    const coffeeShineGeometry = new THREE.CircleGeometry(cupTopRadius - cupThickness - 0.01, 32);
    const coffeeShineMaterial = new THREE.MeshStandardMaterial({
      color: 0x5e2812,
      roughness: 0,
      metalness: 0.9,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 0.6
    });
    const coffeeShine = new THREE.Mesh(coffeeShineGeometry, coffeeShineMaterial);
    coffeeShine.position.y = cupHeight / 2 - 0.05;
    coffeeShine.rotation.x = -Math.PI / 2;
    
    // Create cup handle with better curvature
    const handleCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(cupTopRadius, cupHeight / 4, 0),
      new THREE.Vector3(cupTopRadius + 0.5, cupHeight / 4, 0),
      new THREE.Vector3(cupTopRadius + 0.5, -cupHeight / 4, 0),
      new THREE.Vector3(cupTopRadius, -cupHeight / 4, 0)
    );
    
    const handleGeometry = new THREE.TubeGeometry(
      handleCurve, 64, 0.05, 16, false
    );
    
    const handle = new THREE.Mesh(handleGeometry, cupMaterial);
    handle.castShadow = true;
    handle.receiveShadow = true;
    
    // Create cup rim
    const cupRimGeometry = new THREE.TorusGeometry(cupTopRadius, 0.03, 16, 100);
    const cupRim = new THREE.Mesh(cupRimGeometry, cupMaterial);
    cupRim.position.y = cupHeight / 2;
    cupRim.rotation.x = Math.PI / 2;
    cupRim.castShadow = true;
    cupRim.receiveShadow = true;
    
    // Create multiple wispy steam effects
    const smokeGroup = new THREE.Group();
    
    // Function to create a wispy steam path with randomized parameters
    const createThinSteamPath = (offsetX = 0, offsetZ = 0, height = 2.0, complexity = 1) => {
      // Create more complex S-curve for the smoke with random offsets
      let points = [];
      const segments = 5 + Math.floor(complexity * 3);
      
      // Start point just above coffee
      points.push(new THREE.Vector3(
        offsetX * 0.3, 
        cupHeight / 2 - 0.05, 
        offsetZ * 0.3
      ));
      
      // Middle control points with increasing randomness
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const amplitude = 0.3 * t; // More movement as it rises
        
        points.push(new THREE.Vector3(
          offsetX * 0.3 + Math.sin(t * Math.PI * 2 + offsetX) * amplitude,
          cupHeight / 2 - 0.05 + t * height,
          offsetZ * 0.3 + Math.cos(t * Math.PI * 2 + offsetZ) * amplitude
        ));
      }
      
      // End point
      points.push(new THREE.Vector3(
        offsetX * 0.5 + Math.sin(complexity) * 0.2,
        cupHeight / 2 - 0.05 + height,
        offsetZ * 0.5 + Math.cos(complexity) * 0.2
      ));
      
      // Create a smooth curve through the points
      return new THREE.CatmullRomCurve3(points);
    };
    
    // Create steam with a very thin tube
    const createThinSteam = (curve, baseOpacity = 0.2, radius = 0.02) => {
      // Use very thin radius for delicate appearance
      const tubeGeometry = new THREE.TubeGeometry(
        curve,
        100,      // Increased segments for smoother curve
        radius,   // Very thin radius
        8,        // Radial segments
        false     // Not closed
      );
      
      // Semi-transparent white material for steam
      const smokeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: baseOpacity,
        roughness: 1.0,
        side: THREE.DoubleSide,
      });
      
      const smokeMesh = new THREE.Mesh(tubeGeometry, smokeMaterial);
      
      return smokeMesh;
    };
    
    // Create multiple thin steam wisps for layered effect
    const createSteamWisps = () => {
      const wisps = [];
      const numberOfWisps = 5; // Create 5 wisps for a more realistic steam effect
      
      for (let i = 0; i < numberOfWisps; i++) {
        // Create varied steam wisps
        const offsetX = (Math.random() * 2 - 1) * 0.4;
        const offsetZ = (Math.random() * 2 - 1) * 0.4;
        const height = 1.8 + Math.random() * 0.8; // Varied heights
        const complexity = Math.random() * 2;
        const baseOpacity = 0.1 + Math.random() * 0.15; // Varied opacity
        const radius = 0.01 + Math.random() * 0.02; // Varied thickness
        
        const path = createThinSteamPath(offsetX, offsetZ, height, complexity);
        const wisp = createThinSteam(path, baseOpacity, radius);
        
        // Store animation properties
        wisp.userData = {
          originalPath: path,
          time: Math.random() * Math.PI * 2, // Random starting phase
          speed: 0.3 + Math.random() * 0.2,
          offsetX: offsetX,
          offsetZ: offsetZ,
          height: height,
          complexity: complexity,
          baseOpacity: baseOpacity,
          points: path.getPoints(50), // Store original points
          animationPoints: []         // Will store animated points
        };
        
        wisps.push(wisp);
        smokeGroup.add(wisp);
      }
      
      return wisps;
    };
    
    const steamWisps = createSteamWisps();
    
    // Function to update steam animation with more realistic movement
    const updateSteam = (elapsedTime) => {
      steamWisps.forEach((wisp, wispIndex) => {
        const userData = wisp.userData;
        
        // Create new animated points based on the original path
        const newPoints = [];
        
        // Get original points to manipulate
        const originalPoints = userData.points;
        
        for (let i = 0; i < originalPoints.length; i++) {
          const t = i / originalPoints.length;
          const originalPoint = originalPoints[i];
          
          // Increasing effect as we go up the steam
          const heightFactor = t * 2.5;
          
          // Create subtle snake-like movement with multiple frequencies
          // Different frequencies for each wisp and axis creates more natural movement
          const phaseOffset = wispIndex * 0.5;
          
          // Main movement
          const xSinFreq = 1.2 + userData.complexity * 0.3;
          const zCosFreq = 0.9 + userData.complexity * 0.3;
          
          const xOffset = Math.sin(elapsedTime * xSinFreq + t * 8 + phaseOffset) * 0.05 * heightFactor;
          const zOffset = Math.cos(elapsedTime * zCosFreq + t * 6 + phaseOffset) * 0.05 * heightFactor;
          
          // Higher frequency subtle details
          const detailX = Math.sin(elapsedTime * 3 + t * 15 + phaseOffset * 2) * 0.02 * heightFactor;
          const detailZ = Math.sin(elapsedTime * 2.5 + t * 12 + phaseOffset * 2) * 0.02 * heightFactor;
          
          // Combine all movements
          const newPoint = new THREE.Vector3(
            originalPoint.x + xOffset + detailX,
            originalPoint.y + Math.sin(elapsedTime * 0.5 + phaseOffset) * 0.02 * heightFactor, // Subtle vertical movement
            originalPoint.z + zOffset + detailZ
          );
          
          newPoints.push(newPoint);
        }
        
        // Create a new curve from the animated points
        const newCurve = new THREE.CatmullRomCurve3(newPoints);
        
        // Update geometry
        const newGeometry = new THREE.TubeGeometry(
          newCurve,
          100,  // Increased segments for smoother curve
          userData.radius || 0.02, // Use stored radius
          8,    // Radial segments
          false // Not closed
        );
        
        // Replace geometry
        wisp.geometry.dispose();
        wisp.geometry = newGeometry;
        
        // Slight opacity pulsing for more realism
        if (wisp.material instanceof THREE.MeshStandardMaterial) {
          // Calculate fade out based on how high up the steam is
          // Makes the steam naturally fade at the top
          const fadeHeight = 1.5;
          const topPointY = newPoints[newPoints.length - 1].y;
          const fadeOutFactor = Math.max(0, 1 - Math.max(0, topPointY - fadeHeight) / 0.7);
          
          wisp.material.opacity = userData.baseOpacity * 
            fadeOutFactor * 
            (0.8 + Math.sin(elapsedTime * 0.7 + wispIndex) * 0.2);
        }
      });
    };
    
    // Create text elements in 3D space using TextGeometry
    const createTextElements = () => {
      // Placeholder for potential future implementation of 3D text
      // For now, we'll use HTML overlay for text as it's more readable and performant
    };
    
    // Add all elements to cup group
    cupGroup.add(cup);
    cupGroup.add(saucerTop);
    cupGroup.add(saucerBase);
    cupGroup.add(saucerRim);
    cupGroup.add(coffee);
    cupGroup.add(coffeeShine);
    cupGroup.add(handle);
    cupGroup.add(cupRim);
    cupGroup.add(smokeGroup);
    
    // Position cup group
    cupGroup.position.y = 0;
    cupGroup.rotation.x = 0.2; // Slight tilt
    cupGroup.rotation.y = Math.PI; // Face front
    scene.add(cupGroup);
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = Math.PI;
    let targetRotationX = 0.2;
    
    const handleMouseMove = (event) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationY = Math.PI + mouseX * 0.3;
      targetRotationX = 0.2 + mouseY * 0.15;
      
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create subtle coffee surface animation
    const animateCoffeeSurface = (elapsedTime) => {
      if (coffeeShine) {
        // Create subtle "breathing" effect for coffee shine
        const breatheScale = 1 + Math.sin(elapsedTime * 0.5) * 0.01;
        coffeeShine.scale.set(breatheScale, breatheScale, 1);
        
        // Slightly shift position for a liquid-like movement
        const shiftX = Math.sin(elapsedTime * 0.7) * 0.01;
        const shiftZ = Math.cos(elapsedTime * 0.5) * 0.01;
        coffeeShine.position.x = shiftX;
        coffeeShine.position.z = shiftZ;
        
        // Subtly adjust opacity for shine effect
        if (coffeeShineMaterial instanceof THREE.MeshStandardMaterial) {
          coffeeShineMaterial.opacity = 0.5 + Math.sin(elapsedTime * 0.3) * 0.1;
        }
      }
      
      // Slight movement for coffee surface
      if (coffee) {
        const microShiftY = Math.sin(elapsedTime * 0.3) * 0.002;
        coffee.position.y = cupHeight / 2 - 0.15 + microShiftY;
      }
    };
    
    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // If no interaction, gently rotate to show all aspects of the cup
      if (!hasInteracted) {
        targetRotationY = Math.PI + Math.sin(elapsedTime * 0.2) * 0.1;
        targetRotationX = 0.2 + Math.sin(elapsedTime * 0.15) * 0.05;
      }
      
      // Smooth rotation
      cupGroup.rotation.y += (targetRotationY - cupGroup.rotation.y) * 0.05;
      cupGroup.rotation.x += (targetRotationX - cupGroup.rotation.x) * 0.05;
      
      // Update steam animation
      updateSteam(elapsedTime);
      
      // Animate coffee surface
      animateCoffeeSurface(elapsedTime);
      
      renderer.render(scene, camera);
      
      if (isLoading) {
        setIsLoading(false);
      }
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-foam/40 to-coffee-cream/30"></div>
      
      {/* 3D container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full"
        style={{ minHeight: "300px" }}
      />
      
      {/* Text overlay with styled typography */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/30 to-transparent">
        <div className="flex flex-col items-center">
          <div className="text-white font-bold text-3xl tracking-widest mb-1 drop-shadow-md">
            PREMIUM COFFEE
          </div>
          <div className="bg-white/90 px-4 py-1 rounded-full">
            <p className="text-coffee-dark text-sm font-medium">
              First Specialty Coffee drive-thru in Pampanga
            </p>
          </div>
        </div>
      </div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-coffee-cream/80 z-20 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-4 border-coffee-medium/30 border-t-coffee-dark animate-spin mb-4"></div>
            <p className="text-coffee-dark font-medium">Brewing your premium coffee...</p>
          </div>
        </div>
      )}
      
      {/* Fallback content in case 3D doesn't load */}
      {!containerRef.current && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-coffee-dark/80 z-10">
          <div className="text-center p-8">
            <div className="w-24 h-24 mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-coffee-cream">
                <path d="M2 8H16.5C17.3284 8 18 8.67157 18 9.5V9.5C18 10.3284 17.3284 11 16.5 11H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 11H10.5C11.3284 11 12 11.6716 12 12.5V12.5C12 13.3284 11.3284 14 10.5 14H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 14H11.5C12.3284 14 13 14.6716 13 15.5V15.5C13 16.3284 12.3284 17 11.5 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M18 9.00003C19.2144 9.4791 20 10.6108 20 12C20 13.3892 19.2144 14.5209 18 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M4 8C2.89543 8 2 7.10457 2 6V5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V6C18 7.10457 17.1046 8 16 8H4Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M4 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 21V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Premium Coffee</h3>
            <p className="text-coffee-cream/80">Experience our specialty coffee with the finest beans</p>
          </div>
        </div>
      )}
      
      {/* Interaction hint */}
      {!hasInteracted && !isLoading && containerRef.current && (
        <div className="absolute top-4 left-0 right-0 mx-auto w-fit bg-coffee-dark/80 text-white px-4 py-1.5 rounded-full text-sm z-10 flex items-center gap-2 animate-pulse">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
            <path d="M12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5Z" fill="currentColor"/>
            <path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" fill="currentColor"/>
            <path d="M20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z" fill="currentColor"/>
            <path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor"/>
            <path d="M16.9497 7.05025C17.3403 6.65973 17.3403 6.02656 16.9497 5.63604C16.5592 5.24551 15.9261 5.24551 15.5355 5.63604C15.145 6.02656 15.145 6.65973 15.5355 7.05025C15.9261 7.44077 16.5592 7.44077 16.9497 7.05025Z" fill="currentColor"/>
            <path d="M8.46446 15.5355C8.85499 15.145 8.85499 14.5118 8.46446 14.1213C8.07394 13.7308 7.44077 13.7308 7.05025 14.1213C6.65973 14.5118 6.65973 15.145 7.05025 15.5355C7.44077 15.9261 8.07394 15.9261 8.46446 15.5355Z" fill="currentColor"/>
            <path d="M16.9497 16.9497C17.3403 16.5592 17.3403 15.9261 16.9497 15.5355C16.5592 15.145 15.9261 15.145 15.5355 15.5355C15.145 15.9261 15.145 16.5592 15.5355 16.9497C15.9261 17.3403 16.5592 17.3403 16.9497 16.9497Z" fill="currentColor"/>
            <path d="M8.46446 8.46446C8.85499 8.07394 8.85499 7.44077 8.46446 7.05025C8.07394 6.65973 7.44077 6.65973 7.05025 7.05025C6.65973 7.44077 6.65973 8.07394 7.05025 8.46446C7.44077 8.85499 8.07394 8.85499 8.46446 8.46446Z" fill="currentColor"/>
          </svg>
          Move to interact with the cup
        </div>
      )}
    </div>
  );
}
