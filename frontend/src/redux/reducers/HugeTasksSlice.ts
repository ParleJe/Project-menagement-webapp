import HugeTask from "../../helpers/classes/HugeTask";


interface HugeTaskState {
    HugeTasks: HugeTask[],
    selected: number,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: HugeTaskState = {
    HugeTasks: [],
    selected: -1,
    loading: "idle"
};