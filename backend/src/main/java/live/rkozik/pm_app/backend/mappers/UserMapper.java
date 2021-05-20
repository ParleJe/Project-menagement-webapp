package live.rkozik.pm_app.backend.mappers;

import live.rkozik.pm_app.backend.dtos.SimplifiedUserDto;
import live.rkozik.pm_app.backend.dtos.UserGetDto;
import live.rkozik.pm_app.backend.dtos.UserPostDto;
import live.rkozik.pm_app.backend.models.User;
import org.mapstruct.Mapper;

@Mapper(
        componentModel = "spring",
        uses = {HugeTaskMapper.class, ToDoMapper.class, ProjectMapper.class}
)
public interface UserMapper {

    UserPostDto UserToUserPostDto(User source);
    User UserPostDtoToUser(UserPostDto source);

    UserGetDto UserToUserGetDto(User source);
    User UserGetDtoToUser(UserGetDto source);
}
