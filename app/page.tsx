import { Header } from 'app/components/header';
import { Mentoring } from 'app/components/mentoring';
import { BlogPosts } from 'app/components/posts';
import { ProjectsPage } from 'app/components/projects';

export default function Home() {
  return (
    <div className=" max-w-3xl w-full flex flex-col gap-12">
      <Header />
      <BlogPosts />
      <ProjectsPage />
      <Mentoring />
    </div>
  );
}
