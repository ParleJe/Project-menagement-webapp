package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query(value = "SELECT p FROM Project p inner join fetch p.projectAssigned as pa where pa.id = ?1")
    List<Project> findByIdUser(Long idUsers);
}
