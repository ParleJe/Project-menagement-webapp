package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.HugeTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HugeTaskRepository extends JpaRepository<HugeTask, Long> {

    @Query(value = "SELECT t FROM HugeTask t inner join fetch t.project as p where p.id = ?1")
    List<HugeTask> findByIdProject(Long idProject);

    @Query(value = "SELECT t FROM HugeTask t inner join fetch t.hugeTaskAssigned as a where a.id = ?1")
    List<HugeTask> findByIdUser(Long idUser);
}
