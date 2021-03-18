package live.rkozik.pm_app.backend.models;

import java.util.List;

public class Project {

    private Long id;

    private String name;

    private String description;

    private List<HugeTask> tasks;

    private List<User> assigned;

    public Project(Long id, String name, String description, List<HugeTask> tasks, List<User> assigned) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.assigned = assigned;
    }
}
