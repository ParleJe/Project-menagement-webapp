package live.rkozik.pm_app.backend.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Users")
public @Data
class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private Character[] password;
    private String name;
    private String surname;

    @ManyToMany
    @JoinTable(
            name = "project_assigned",
            joinColumns = @JoinColumn(name = "id_users"),
            inverseJoinColumns = @JoinColumn(name = "id_projects"))
    private List<Project> projects;
    @ManyToMany
    @JoinTable(
            name = "SmallTasks_assigned",
            joinColumns = @JoinColumn(name = "id_users"),
            inverseJoinColumns = @JoinColumn(name = "id_smallTasks"))
    private List<SmallTask> smallTasks;
    @ManyToMany
    @JoinTable(
            name = "HugeTasks_assigned",
            joinColumns = @JoinColumn(name = "id_users"),
            inverseJoinColumns = @JoinColumn(name = "id_hugeTasks"))
    private List<HugeTask> hugeTasks;

}
