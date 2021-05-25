package live.rkozik.pm_app.backend.services;

import live.rkozik.pm_app.backend.dtos.SimplifiedUserDto;
import live.rkozik.pm_app.backend.mappers.UserMapper;
import live.rkozik.pm_app.backend.models.User;
import live.rkozik.pm_app.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserMapper mapper;
    private final UserRepository repository;

    @Autowired
    public UserService(UserMapper mapper, UserRepository repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    public List<SimplifiedUserDto> findAllUsersByTask(Long id) {
        List<User> users = repository.findByTask(id);
        return users.stream()
                .map(mapper::UserToSimplifiedUserDto)
                .collect(Collectors.toList());
    }

    public List<SimplifiedUserDto> findAllUsersByProject(Long id) {
        List<User> users = repository.findByProject(id);
        return users.stream()
                .map(mapper::UserToSimplifiedUserDto)
                .collect(Collectors.toList());
    }

    public SimplifiedUserDto getUserById(Long id) {
        Optional<User> optionalUser = repository.findById(id);

        return optionalUser.map(mapper::UserToSimplifiedUserDto).orElseThrow(
                () -> new HttpClientErrorException(HttpStatus.NOT_FOUND, "cannot find User")
        );
    }
}
