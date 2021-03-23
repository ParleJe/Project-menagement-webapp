package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.HugeTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface HugeTaskRepository extends JpaRepository<HugeTask, Long> {
}
