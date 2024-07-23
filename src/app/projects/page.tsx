import ProList from '@/src/components/ProjectList/proList';
import {ProjectId} from '@/src/components/ProjectList/project.Interface';
import Navigation from '@/src/components/navbar';
const Page = () => {
    const ListOfProjects : ProjectId [] = [{
        id:1,   
        title: 'Orphans Sponsoship Program',
        organization: '  usman',
        projectStartDate: '  2024-05-02',
        typeOfDistribution: '  Cash',
        description:' We provide financial support to orphans by distributing $240 to each child every six months. Additionally, we are committed to supporting their education and health by offering resources and assistance to ensure their overall well-being and development.'
       },
       {
         id:2,   
        title: 'Winterization Project',
        organization: '  HCFO',
        projectStartDate: ' 2024-05-02',
        typeOfDistribution: ' Winter Kits',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates nihil fuga perspiciatis natus repellendus est et unde atque in distinctio quidem, beatae possimus totam, eos recusandae, excepturi nam tenetur.'

       },
       {
         id:3,   
        title: 'Ramadan Packages',
        organization: 'HCFO',
        projectStartDate: '2024-05-02',
        typeOfDistribution: 'Food Packages',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates nihil fuga perspiciatis natus repellendus est et unde atque in distinctio quidem, beatae possimus totam, eos recusandae, excepturi nam tenetur.'

       },
       {
         id:4,   
        title: 'Zakat-ul-Fitr',
        organization: 'HCFO',
        projectStartDate: '2024-05-02',
        typeOfDistribution: 'Cash',
        description:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates nihil fuga perspiciatis natus repellendus est et unde atque in distinctio quidem, beatae possimus totam, eos recusandae, excepturi nam tenetur.'

       }
    
    ];
    return (
        <div>
            <Navigation />
            <div  className="mx-auto max-w-8xl p-4">
            <div className="flex flex-wrap -mx-2">
            {
                ListOfProjects.map((project) => (
            <div className="px-2 w-full md:w-1/2 " key={project.id}>
                    <ProList Project={project} />
            </div>  
                           
                ))
            }
            </div>
        </div>
        </div>
    );
}

export default Page;