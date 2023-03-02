import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Project = () => {
    const works = useSelector((state) => state.work.work);
    const { project } = useParams();
    const current = works.find((work) => work.slug === project);

    return (current.content);
};

export default Project;