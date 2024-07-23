import Navigation from '@/src/components/navbar';

const Page = ({params}: {params:{projectId: string}}) => {
    const {projectId} = params;
    return(
        <div>
            <Navigation /> 
          
        <div>          
            <h1> Hello: {projectId}  </h1>
            The project details will be shown here
        </div>
        </div>
    );
}

export default Page;