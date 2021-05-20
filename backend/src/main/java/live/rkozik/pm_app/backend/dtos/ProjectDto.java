package live.rkozik.pm_app.backend.dtos;

import lombok.*;
import org.springframework.web.util.UriComponents;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDto extends SimplifiedDto {
    private List<SimplifiedUserDto> usersAssigned;
    private List<SimplifiedUserDto> tasks;
}
