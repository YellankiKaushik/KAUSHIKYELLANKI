import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-3xl font-bold mb-6">
        Project Detail Page
      </h1>

      <p className="text-lg">
        Project Slug: <span className="text-primary-light">{slug}</span>
      </p>

      <p className="mt-6 text-white/70">
        This page will later display the full details of the selected project.
      </p>
    </div>
  );
};

export default ProjectDetail;