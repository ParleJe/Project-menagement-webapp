package live.rkozik.pm_app.backend.dtos;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class SimplifiedDto {
    protected Long id;
    protected String name;
    protected String description;
    private boolean isDone;
}
