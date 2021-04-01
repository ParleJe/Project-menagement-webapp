import { MDBContainer } from 'mdb-react-ui-kit';
import {PieChart} from 'react-minimal-pie-chart';

const DonutChart = () => {

    const dataMock = [
        { title: 'Done', value: 10, color: '#00b74a' },
        { title: 'Not Started', value: 6, color: '#f93154' },
        { title: 'In Progress', value: 20, color: '#39c0ed' },
      ];

    return (
        <MDBContainer className="p-5 h-100">
                <PieChart lineWidth={20} rounded data={dataMock} />
        </MDBContainer>
    )

} 

export default DonutChart;