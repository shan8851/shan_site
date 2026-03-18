import { permanentRedirect } from 'next/navigation';

export default function LabsPage(): never {
  permanentRedirect('/projects');
}
