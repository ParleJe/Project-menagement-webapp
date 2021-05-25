package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.Project;
import live.rkozik.pm_app.backend.models.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {

    @Query(value = "SELECT t FROM ToDo t inner join fetch t.hugeTask as ht where ht.id = ?1")
    List<ToDo> findByHugeTask(Long idTask);
}
