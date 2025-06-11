import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Home,
  Briefcase,
  ShoppingBag,
  Users,
  Heart,
  MessageSquare,
  FileText,
} from 'lucide-react';

const categories = [
  { name: 'Vehicles', icon: Car },
  { name: 'Housing', icon: Home },
  { name: 'Jobs', icon: Briefcase },
  { name: 'For Sale', icon: ShoppingBag },
  { name: 'Services', icon: Users },
  { name: 'Community', icon: Heart },
  { name: 'Resumes', icon: FileText },
  { name: 'Discussion Forums', icon: MessageSquare },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CategoryGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <motion.div key={category.name} variants={item}>
            <Link
              to={`/search/${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-6 rounded-none bg-[#151518] hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 group border border-white border-solid border-[1.5px]"
            >
              <div className="p-4 rounded-full bg-[#222] text-white mb-3 group-hover:bg-[#e22441] group-hover:text-white transition-all">
                <Icon className="h-6 w-6" />
              </div>
              <span className="text-white font-medium text-center group-hover:text-[#e22441] transition-colors">
                {category.name}
              </span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}