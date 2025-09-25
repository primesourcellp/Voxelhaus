import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, Clock, Award } from 'lucide-react';
import FloorPlanServices_2d_3d from '../components/services/FloorPlanServices_2d_3d';
import floorPlanImage from '../assets/floor.png';

const FloorPlansPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Floor Plans Services Content */}
      <FloorPlanServices_2d_3d />
    </div>
  );
};

export default FloorPlansPage;
