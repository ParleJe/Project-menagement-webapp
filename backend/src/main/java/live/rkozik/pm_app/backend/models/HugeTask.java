package live.rkozik.pm_app.backend.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "HugeTasks")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HugeTask {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;
    private boolean isDone;

    @ManyToMany
    @JoinTable(
            name = "HugeTasksAssigned",
            joinColumns = @JoinColumn(name = "idHugeTasks"),
            inverseJoinColumns = @JoinColumn(name = "idUsers"))
    private List<User> hugeTaskAssigned;
    @OneToMany(targetEntity = ToDo.class, mappedBy = "hugeTask")
    private List<ToDo> toDos;
    @ManyToOne
    private Project project;
}
