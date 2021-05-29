package live.rkozik.pm_app.backend.models;


import live.rkozik.pm_app.backend.dtos.SimplifiedDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
    private String state;
    private Integer priority;

    @ManyToMany
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinTable(
            name = "HugeTasksAssigned",
            joinColumns = @JoinColumn(name = "idHugeTasks"),
            inverseJoinColumns = @JoinColumn(name = "idUsers"))
    private List<User> hugeTaskAssigned;
    @OneToMany(targetEntity = ToDo.class, mappedBy = "hugeTask")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<ToDo> toDos;
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Project project;

    public HugeTask substituteStaticMembers(SimplifiedDto task) {
        if(task.getName() != null) {
            this.setName(task.getName());
        }

        if(task.getDescription() != null) {
            this.setDescription(task.getDescription());
        }

        if(task.getState() != null) {
            this.setState(task.getState());
        }

        if(task.getPriority() != null) {
            this.setPriority(task.getPriority());
        }

        return this;
    }
}
