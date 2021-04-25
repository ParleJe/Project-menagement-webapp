package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {


}
