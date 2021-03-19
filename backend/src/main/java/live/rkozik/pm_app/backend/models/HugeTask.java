package live.rkozik.pm_app.backend.models;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "HugeTasks")
public @Data
class HugeTask {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String description;
    private boolean isDone;

    @ManyToMany
    @JoinTable(
            name = "HugeTasks_assigned",
            joinColumns = @JoinColumn(name = "id_hugeTasks"),
            inverseJoinColumns = @JoinColumn(name = "id_users"))
    private List<User> hugeTaskAssigned;
    @OneToMany(targetEntity = SmallTask.class, mappedBy = "hugeTask")
    private List<SmallTask> smallTasks;
    @ManyToOne
    private Project project;
}
