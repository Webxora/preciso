
/**
 * Utility functions for THREE.js integration
 */

// Check if the current environment supports WebGL
export function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Check if the device is likely to handle 3D well based on navigator info
export function isHighPerformanceDevice(): boolean {
  if (typeof window === 'undefined' || !window.navigator) {
    return false;
  }
  
  // Check for mobile devices with potentially lower performance
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent.toLowerCase()
  );
  
  // If it's a mobile device, check if it's a high-end one
  // This is a very rough approximation
  if (isMobile) {
    // Check device memory if available (Chrome only)
    if ((navigator as any).deviceMemory) {
      return (navigator as any).deviceMemory >= 4; // 4GB RAM or more is likely higher end
    }
    
    // Use logical processors as a fallback indicator of performance
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency >= 4; // 4 or more cores suggests higher performance
    }
  }
  
  // Desktop devices are generally more capable
  return !isMobile;
}

// Get the appropriate pixel ratio for the device
export function getOptimalPixelRatio(): number {
  if (typeof window === 'undefined') {
    return 1;
  }
  
  const pixelRatio = window.devicePixelRatio || 1;
  
  // For high performance devices, use the device's pixel ratio
  if (isHighPerformanceDevice()) {
    return pixelRatio;
  }
  
  // For lower performance devices, cap at 2 or use a lower value
  return Math.min(pixelRatio, 2);
}
