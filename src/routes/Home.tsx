import { createFileRoute } from '@tanstack/react-router'
import { SidebarDemo } from '../components/Navbar'
import { div } from 'framer-motion/client'
import { WelcomeCard } from '../components/Bento-Grid';

export const Route = createFileRoute('/Home')({
  component:Home,
})

function Home() {
  return (
		<div>
      <SidebarDemo />
		</div>
	);
}