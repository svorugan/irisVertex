import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-full w-full">
      <Outlet />
    </div>
  );
}
