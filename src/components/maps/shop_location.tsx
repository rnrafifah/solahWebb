// components/BranchMap.tsx
"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface BranchMapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function BranchMap({
  lat,
  lng,
  name,
}: BranchMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
    //   style: `https://maps.geoapify.com/v1/styles/osm-liberty/style.json?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
      style: `https://api.maptiler.com/maps/streets-v4/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [lng, lat],
      zoom: 15,
      interactive: true,
    });

    new maplibregl.Marker()
      .setLngLat([lng, lat])
      .setPopup(new maplibregl.Popup().setText(name))
      .addTo(map);

    return () => map.remove();
  }, [lat, lng, name]);

  return (
    <div
      ref={mapContainer}
      className="w-full h-100 rounded-lg overflow-hidden"
    />
  );
}