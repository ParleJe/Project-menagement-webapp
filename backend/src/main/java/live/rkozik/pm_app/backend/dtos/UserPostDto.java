package live.rkozik.pm_app.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserPostDto {

    private Long id;
    private String email;
    private Character[] password;
    private String name;
    private String surname;
    private List<HugeTaskDto> hugeTasks;
    private List<ToDoDto> toDos;

}
