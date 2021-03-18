package live.rkozik.pm_app.backend.models;


import javax.persistence.*;


public class ToDo {

    private Long id;

    private SmallTask task;

    private String name;

    public ToDo(Long id, SmallTask task, String name) {
        this.id = id;
        this.task = task;
        this.name = name;
    }
}
