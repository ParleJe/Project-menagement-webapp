package live.rkozik.pm_app.backend.models;


import javax.persistence.*;
import java.util.List;

public class SmallTask {

    private Long id;

    private HugeTask hugeTask;

    private String description;

    private List<ToDo> toDos;

    private boolean isDone;

    private List<User> assigned;

    public SmallTask(Long id, HugeTask hugeTask, String description, List<ToDo> toDos, boolean isDone, List<User> assigned) {
        this.id = id;
        this.hugeTask = hugeTask;
        this.description = description;
        this.toDos = toDos;
        this.isDone = isDone;
        this.assigned = assigned;
    }
}
