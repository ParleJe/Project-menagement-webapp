package live.rkozik.pm_app.backend.models;


import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "SmallTasks")
public @Data
class SmallTask {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private boolean isDone;

    @ManyToMany
    @JoinTable(
        name = "SmallTasks_assigned",
        joinColumns = @JoinColumn(name = "id_smallTasks"),
        inverseJoinColumns = @JoinColumn(name = "id_users"))
    private List<User> projectAssigned;
    @OneToMany(targetEntity = ToDo.class, mappedBy = "smallTask")
    private List<ToDo> toDos = new ArrayList<>();
    @ManyToOne
    private HugeTask hugeTask;

}
