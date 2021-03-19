package live.rkozik.pm_app.backend.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "toDos")
public @Data
class ToDo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @ManyToOne
    private SmallTask smallTask;


}
