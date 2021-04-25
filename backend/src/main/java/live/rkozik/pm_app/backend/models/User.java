package live.rkozik.pm_app.backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String password;
    private String name;
    private String surname;

    @ManyToMany
    @JoinTable(
            name = "projectAssigned",
            joinColumns = @JoinColumn(name = "idUsers"),
            inverseJoinColumns = @JoinColumn(name = "idProjects"))
    private List<Project> projects;
    @ManyToMany
    @JoinTable(
            name = "HugeTasksAssigned",
            joinColumns = @JoinColumn(name = "idUsers"),
            inverseJoinColumns = @JoinColumn(name = "idHugeTasks"))
    private List<HugeTask> hugeTasks;

}
