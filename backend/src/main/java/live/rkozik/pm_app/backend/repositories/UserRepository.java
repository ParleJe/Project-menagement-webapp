package live.rkozik.pm_app.backend.repositories;

import live.rkozik.pm_app.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT u FROM User u inner join fetch u.hugeTasks as ht where ht.id = ?1")
    List<User> findByTask(Long idTask);

    @Query(value = "SELECT u FROM User u inner join fetch u.projects as p where p.id = ?1")
    List<User> findByProject(Long idProject);

    Optional<User> findUserByNameAndSurname(String name, String surname);

    Optional<User> findUserByEmail(String email);
}
