package live.rkozik.pm_app.backend.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "Projects")
public @Data
class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String description;

    @ManyToMany
    @JoinTable(
            name = "project_assigned",
            joinColumns = @JoinColumn(name = "id_projects"),
            inverseJoinColumns = @JoinColumn(name = "id_users"))
    private List<User> projectAssigned;
    @OneToMany(targetEntity = HugeTask.class, mappedBy = "project")
    private List<HugeTask> tasks;

}
