import PropTypes from "prop-types";
import Link from "next/link";


const ProList = (props: any) => {
    const { Project } = props;

    return(
        <Link   href={`/projects/project/${Project.id}`}>
        
        <div className=" bg-white shadow-md rounded-lg p-4 mb-6 w-full transition-transform transform hover:scale-105 hover:shadow-xl" key={Project.id}>
        <h2 className="text-xl font-semibold mb-2">{Project.title}</h2>
        

        <div className="flex items-center">
        <p className="text-green-700">Organization:&nbsp; &nbsp;</p>
            <span className="text-black-1000"> {Project.organization} </span>
        </div>

        <div className="flex items-center">
            <p className="text-green-700">Project Started:&nbsp; &nbsp;</p>
            <span className="text-black-700">{Project.projectStartDate}</span>
        </div> 

        <div className="flex items-center">
        <p className="text-green-700">Type Of Distribution:&nbsp;  </p> 
        <p> {Project.typeOfDistribution} </p> 
        </div>
        
        <div>
            <p className="text-green-700">Description:</p> 
               <span className="text-black-800"> {Project.description} </span> 
        </div>
    </div>
  
        </Link>
      
    );
}
ProList.PropTypes={
    Project: PropTypes.shape({ 
        id: PropTypes.number,
        title: PropTypes.string,
        organization: PropTypes.string,
        projectStartDate: PropTypes.string,
        typeOfDistribution: PropTypes.string,
        description: PropTypes.string })
}

export default ProList;