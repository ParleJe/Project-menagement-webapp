package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.ToDo;
import org.springframework.data.repository.CrudRepository;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {
}
